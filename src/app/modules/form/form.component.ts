import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/data/schemas/employee';
import { Team } from 'src/app/data/schemas/team';
import { TeamService } from 'src/app/data/services/team.service';
import { TeamManagementService } from 'src/app/data/services/team-management.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  isValidFormSubmitted = false;
  allSkills: Observable<any[]> = new Observable<any[]>();

  constructor(
    private formBuilder: FormBuilder,
    private teamMngService: TeamManagementService,
    private teamService: TeamService,
  ) {
  }

  ngOnInit(): void {
    this.allSkills = this.teamMngService.getSkills();

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      employees: this.formBuilder.array([
        this.formBuilder.group(new Employee()),
        this.formBuilder.group(new Employee())
      ])
    });

  }

  get name(): FormControl {
    return this.form.get('name') as FormControl;
  }

  get employees(): FormArray {
    return this.form.get('employees') as FormArray;
  }

  addEmployee(): void {
    const employeeFormGroup = this.formBuilder.group(new Employee());
    this.employees.push(employeeFormGroup);
  }

  deleteEmployee(idx: number): void {
    this.employees.removeAt(idx);
  }

  async onSubmit(): Promise<void> {
    this.isValidFormSubmitted = true;
    if (this.form.invalid) {
      return;
    }
    const team: Team = this.form.value;
    console.log(team);
    await this.teamService.create(team).toPromise();
    this.form.reset();
  }

  patchEmployeeValues(): void {
    this.employees.patchValue([
      {id: '111', name: 'Mohan'},
      {id: '112', skill: 'Angular'}
    ]);
  }

  setEmployeeValues(): void {
    this.employees.setValue([
      {id: '111', name: 'Mohan', skill: 'Java'},
      {id: '112', name: 'Krishna', skill: 'Angular'}
    ]);
  }

  resetTeamForm(): void {
    this.form.reset();
  }
}
