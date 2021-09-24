import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { debounceTime, exhaustMap, filter, scan, startWith, switchMap, tap } from 'rxjs/operators';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { User } from 'src/app/data/schemas/user';
import { UserValidator } from '../../../data/validators/user-validator';
import { UserService } from 'src/app/data/services/user.service';
import { takeWhileInclusive } from 'rxjs-take-while-inclusive';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss']
})
export class AutoCompleteComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('auto') autoComplete!: MatAutocomplete;
  form!: FormGroup;
  users: User[] = [
    {id: 1, name: 'Mary'},
    {id: 2, name: 'Shelley'},
    {id: 3, name: 'Igor'},
  ];
  filteredUsers: Observable<User[]> | undefined;
  private filteredUsersSubject = new BehaviorSubject<User[]>([]);
  private nextPageSubject = new Subject();
  private destroySubject = new Subject();
  lastPage = false;
  dataRes: User[] = [];
  isLoading = true;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
  ) {
  }

  ngAfterViewInit(): void {
    console.log(this.autoComplete.isOpen);
  }

  // tslint:disable-next-line:typedef
  async ngOnInit() {
    this.initForm();
    // this.createFakeData();

    await this.getData(undefined, 1, 10);


    // this.getData();
    const filterItem = this.form.controls.assignee.valueChanges.pipe(
      startWith(''),
      debounceTime(200),
      filter(predicate => typeof predicate === 'string')
    );

    this.filteredUsers = filterItem.pipe(
      // tslint:disable-next-line:no-shadowed-variable
      switchMap(filter => {
        let currentPage = 1;
        return this.nextPageSubject.pipe(
          startWith(currentPage),
          // Note: Until the backend responds, ignore NextPage requests.
          exhaustMap(_ => this.getStudentsList(filter, currentPage)),
          tap(() => currentPage++),
          // /** Note: This is a custom operator because we also need the last emitted value.
          //  Note: Stop if there are no more pages, or no results at all for the current search text.
          //  */
          takeWhileInclusive(predicate => predicate.length > 0),
          scan((allProducts: any, newProducts: any) => allProducts.concat(newProducts), []),
        );
      })
    ); // Note: We let asyncPipe subscribe.
    console.log(this.filteredUsers);
  }

  ngOnDestroy(): any {
    this.destroySubject.next();
    this.destroySubject.complete();
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      assignee: [null, UserValidator.required]
    });
  }

  // FIXME: Lấy danh sách user từ API
  // tslint:disable-next-line:typedef
  async getData(keyword?: string, page: number = 1, size: number = 10) {
    this.dataRes = await this.userService.getList(keyword, page, size).toPromise();
    setTimeout(() => this.isLoading = false, 2000);
  }

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  traceByFn(index: number, item: any): number {
    return index;
  }

  onOpen(): void {
    console.log('AutoComplete opened: ', this.autoComplete.isOpen);
  }

  onClose(): void {
    console.log('AutoComplete closed');
  }

  onSelect(): void {
    console.log('AutoComplete selected');
  }

  onActive(): void {
    console.log('AutoComplete active');
  }

  onSubmit(): void {
    const data = this.form.controls.assignee.value;
    (typeof data === 'string') ? console.log({assignee: {name: data}}) : console.log(data);
  }

  // Required selection
  onAutocompleteKeyUp(searchText: string, users: User[]): void {
    const lowerText = searchText?.toLowerCase();
    this.filteredUsersSubject.next(
      !lowerText ? users : users.filter(user => user.name.toLocaleLowerCase().includes(lowerText))
    );
  }

  // Scroll
  onScroll(): void {
    // Note: This is called multiple times after the scroll has reached the 80% threshold position.
    if (!this.lastPage) {
      this.nextPageSubject.next();
    }
  }

  createFakeData(): void {
    // Here, you can call your api if you wants data from backend.
    for (let i = 1; i < 100; i++) {
      this.userService.create({
        id: i,
        name: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
      }).subscribe(data => {
        console.log(data);
      });
    }
  }

  getStudentsList(startsWith: any, page: number): Observable<User[]> {
    const take = 10;
    // const skip = page > 0 ? (page - 1) * take : 0;
    // const filtered = this.users
    //   .filter(user => user.name.toLowerCase().startsWith(startsWith.toLowerCase()));
    // console.log(startsWith);
    // const result = filtered.slice(skip, skip + take);
    // if (result.length === 0) {
    //   this.lastPage = true;
    // }
    //
    // console.log(this.dataRes.length);

    // return of(this.dataRes);
    console.log('page ' + page);
    return this.userService.getList(startsWith.toLowerCase(), page, take);
  }

}
