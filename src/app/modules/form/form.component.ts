import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/data/schemas/employee';
import { Team } from 'src/app/data/schemas/team';
import { TeamManagementService } from 'src/app/data/services/team-management.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  teamForm!: FormGroup;
  isValidFormSubmitted: Boolean = false;
  allSkills: Observable<any[]> | undefined;
  constructor(
    private formBuilder: FormBuilder,
    private teamMngService: TeamManagementService
  ) {
  }
  ngOnInit() {
    this.allSkills = this.teamMngService.getSkills();

    this.teamForm = this.formBuilder.group({
      teamName: ['', Validators.required],
      employees: this.formBuilder.array([
        this.formBuilder.group(new Employee()),
        this.formBuilder.group(new Employee())
      ])
    });

  }
  get teamName(): any {
    return this.teamForm.get('teamName');
  }
  get employees(): FormArray {
    return this.teamForm.get('employees') as FormArray;
  }
  addEmployee() {
    let fg = this.formBuilder.group(new Employee());
    this.employees.push(fg);
  }
  deleteEmployee(idx: number) {
    this.employees.removeAt(idx);
  }
  onFormSubmit() {
    this.isValidFormSubmitted = false;
    if (this.teamForm.invalid) {
      return;
    }
    this.isValidFormSubmitted = true;
    let team: Team = this.teamForm.value;
    this.teamMngService.saveTeam(team);
    this.teamForm.reset();
  }
  patchEmployeeValues() {
    this.employees.patchValue([
      { empId: "111", empName: "Mohan" },
      { empId: "112", skill: "Angular" }
    ]);
  }
  setEmployeeValues() {
    this.employees.setValue([
      { empId: "111", empName: "Mohan", skill: "Java" },
      { empId: "112", empName: "Krishna", skill: "Angular" }
    ]);

    /**
let emp1 = new Employee();
emp1.empId = "111";
emp1.empName = "Mohan";
emp1.skill = "Java";

let emp2 = new Employee();
emp2.empId = "112";
emp2.empName = "Krishna";
emp2.skill = "Angular";

this.employees.setValue([emp1, emp2]); */
  }
  resetTeamForm() {
    this.teamForm.reset();
  }
}
