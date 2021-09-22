import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { User } from 'src/app/data/schemas/user';
import { UserValidator } from '../../../data/validators/user-validator';
import { UserService } from 'src/app/data/services/user.service';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss']
})
export class AutoCompleteComponent implements OnInit, AfterViewInit {

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
  ) {
  }
  @ViewChild('auto') autoComplete!: MatAutocomplete;
  form!: FormGroup;
  private filteredOptionsSubject = new BehaviorSubject<User[]>([]);

  options: User[] = [
    {id: 1, name: 'Mary'},
    {id: 2, name: 'Shelley'},
    {id: 3, name: 'Igor'}
  ];
  filteredOptions: Observable<User[]> | undefined;

  ngAfterViewInit(): void {
    console.log(this.autoComplete.isOpen);
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      assignee: [null, UserValidator.required]
    });
    // this.getData();
    this.filteredOptions = this.form.controls.assignee.valueChanges
      .pipe(
        startWith(''),
        map(value => (typeof value === 'string') ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );
  }

  // FIXME: Lấy danh sách user từ API
  // async getData() {
  //   this.options = await this.userService.getList().toPromise().then(data => console.log(data));
  // }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();
    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
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

  onAutocompleteKeyUp(searchText: string, options: User[]): void {
    const lowerSearchText = searchText?.toLowerCase();
    this.filteredOptionsSubject.next(
      !lowerSearchText
        ? options
        : options.filter(r => r.name.toLocaleLowerCase().includes(lowerSearchText)));
  }
}
