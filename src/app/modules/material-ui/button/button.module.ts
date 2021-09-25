import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonRoutingModule } from './button-routing.module';
import { ButtonComponent } from './button.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    CommonModule,
    ButtonRoutingModule,
    MatButtonModule
  ]
})
export class ButtonModule { }
