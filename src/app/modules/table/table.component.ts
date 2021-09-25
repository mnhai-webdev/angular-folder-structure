import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Student } from '../../data/schemas/student';
import { StudentService } from '../../data/services/student.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) matPaginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  @ViewChild('input') input!: ElementRef;
  displayedColumns = ['id', 'name', 'age', 'address'];
  dataSource: Student[] = [];
  isLoading = true;
  keyword = undefined;
  page = 1;
  size = 5;
  sort = 'id';
  order = 'desc';
  total = 0;

  constructor(
    private studentService: StudentService,
  ) {
  }

  // tslint:disable-next-line:typedef
  async ngOnInit() {
    // this.createFakeData();
    await this.count();
    await this.getStudents();
  }

  ngAfterViewInit(): void {
    fromEvent(this.input.nativeElement, 'keyup').pipe(
      debounceTime(150),
      distinctUntilChanged(),
    ).subscribe(async () => {
      this.keyword = this.input.nativeElement.value;
      await this.getStudents();
    });

    this.matPaginator.page.pipe().subscribe(async data => {
      // this.isLoading = true;
      this.page = data.pageIndex + 1;
      this.size = data.pageSize;
      await this.getStudents();
    });

    this.matSort.sortChange.subscribe(async data => {
      // this.isLoading = true;
      this.matPaginator.pageIndex = 1;
      this.sort = data.active;
      this.order = data.direction;
      await this.getStudents();
    });
  }

  // tslint:disable-next-line:typedef
  async getStudents() {
    this.dataSource = await this.studentService.getList(this.keyword, this.page, this.size, this.sort, this.order).toPromise();
    this.isLoading = false;
  }

  // tslint:disable-next-line:typedef
  async count() {
    const data = await this.studentService.getAll().toPromise();
    this.total = data.length;
  }

  // createFakeData(): void {
  //   for (let i = 1; i < 100; i++) {
  //     this.studentService.create({
  //       id: i,
  //       name: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
  //       address: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
  //       age: Math.random()
  //     }).subscribe(data => {
  //       console.log(data);
  //     });
  //   }
  // }

}
