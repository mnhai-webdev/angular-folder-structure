import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from '../../data/schemas/user';

@Component({
  selector: 'app-shared-auto-complete',
  templateUrl: './shared-auto-complete.component.html',
  styleUrls: ['./shared-auto-complete.component.scss']
})
export class SharedAutoCompleteComponent implements OnInit {

  control = new FormControl();
  options: User[] = [
    {id: 1, name: 'Mary'},
    {id: 2, name: 'Shelley'},
    {id: 3, name: 'Igor'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
