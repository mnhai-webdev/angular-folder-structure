import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Team } from '../schemas/team';

const ALL_SKILLS = [
  {name: 'Java', displayName: 'Java'},
  {name: 'Angular', displayName: 'Angular'},
  {name: 'Dot Net', displayName: 'Dot Net'}
];

@Injectable({
  providedIn: 'root'
})
export class TeamManagementService {

  constructor() {
  }

  getSkills(): Observable<any[]> {
    return of(ALL_SKILLS);
  }

  saveTeam(team: Team): void {
    console.log('------------TEAM------------');
    console.log('Team Name: ' + team.teamName);
    console.log('----- Employee Details -----');
    for (const employee of team.employees) {
      console.log('Emp Id: ' + employee.id);
      console.log('Emp Name: ' + employee.name);
      console.log('Emp Skill: ' + employee.skill);
      console.log('-------------------');
    }
  }
}
