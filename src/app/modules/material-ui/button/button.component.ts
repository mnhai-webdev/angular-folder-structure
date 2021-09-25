import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit, AfterViewInit {
  @ViewChild(MatButton) matButton!: MatButton;

  constructor() {
  }

  ngAfterViewInit(): void {
    const a = this.matButton.isIconButton;
    console.log(a);
  }

  ngOnInit(): void {
  }

}
