import { Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonToggle, MatButtonToggleChange, MatButtonToggleGroup } from '@angular/material/button-toggle';

@Component({
  selector: 'app-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.scss']
})
export class ButtonToggleComponent implements OnInit {
  @ViewChild(MatButtonToggleGroup) matButtonToggleGroup!: MatButtonToggleGroup;
  @ViewChild('buttonToggle') buttonToggle!: MatButtonToggle;

  constructor() {
  }

  ngOnInit(): void {
  }

  onChange($event: MatButtonToggleChange): void {
    console.log(this.matButtonToggleGroup.selected);
    console.log(this.buttonToggle.buttonId);
  }
}
