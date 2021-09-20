import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentService } from 'src/app/data/services/student.service';
import { NgForm } from '@angular/forms';
import { Student } from '../../data/schemas/student';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-table-editor',
  templateUrl: './table-editor.component.html',
  styleUrls: ['./table-editor.component.scss']
})
export class TableEditorComponent implements OnInit {

  @ViewChild('studentForm', {static: false})
  studentForm!: NgForm;

  studentData!: Student;

  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'name', 'age', 'address', 'actions'];
  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;

  isEditMode = false;

  constructor(private studentService: StudentService) {
    this.studentData = {} as Student;
  }

  ngOnInit(): void {

    // Initializing Datatable pagination
    this.dataSource.paginator = this.paginator;

    // Fetch All Students on Page load
    this.getAllStudents();
  }

  getAllStudents(): void {
    this.studentService.getList().subscribe((response: any) => {
      this.dataSource.data = response;
    });
  }

  editItem(element: Student): void {
    // this.studentData = this.cloneDeep(element);
    // this.isEditMode = true;
  }

  cancelEdit(): void {
    this.isEditMode = false;
    this.studentForm.resetForm();
  }

  deleteItem(id: number): void {
    this.studentService.deleteItem(id).subscribe((response: any) => {

      // Approach #1 to update datatable data on local itself without fetching new data from server
      // @ts-ignore
      this.dataSource.data = this.dataSource.data.filter((o: Student) => {
        return o.id !== id ? o : false;
      });

      console.log(this.dataSource.data);

      // Approach #2 to re-call getAllStudents() to fetch updated data
      // this.getAllStudents()
    });
  }

  addStudent(): void {
    this.studentService.createItem(this.studentData).subscribe((response: any) => {
      this.dataSource.data.push({...response});
      this.dataSource.data = this.dataSource.data.map(o => {
        return o;
      });
    });
  }

  updateStudent(): void {
    this.studentService.updateItem(this.studentData.id, this.studentData).subscribe((response: any) => {

      // Approach #1 to update datatable data on local itself without fetching new data from server
      // @ts-ignore
      this.dataSource.data = this.dataSource.data.map((o: Student) => {
        if (o.id === response.id) {
          o = response;
        }
        return o;
      });

      // Approach #2 to re-call getAllStudents() to fetch updated data
      // this.getAllStudents()

      this.cancelEdit();

    });
  }

  onSubmit(): void {
    if (this.studentForm.form.valid) {
      if (this.isEditMode) {
        this.updateStudent();
      } else {
        this.addStudent();
      }
    } else {
      console.log('Enter valid data!');
    }
  }

}
