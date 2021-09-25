import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonToggleRoutingModule } from './button-toggle-routing.module';
import { ButtonToggleComponent } from './button-toggle.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    ButtonToggleComponent
  ],
  imports: [
    CommonModule,
    ButtonToggleRoutingModule,
    MatButtonToggleModule,
    MatIconModule
  ]
})
export class ButtonToggleModule { }
