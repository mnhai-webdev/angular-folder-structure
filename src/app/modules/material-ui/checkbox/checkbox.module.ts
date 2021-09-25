import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckboxRoutingModule } from './checkbox-routing.module';
import { CheckboxComponent } from './checkbox.component';
import { MatCheckboxModule } from '@angular/material/checkbox';


@NgModule({
  declarations: [
    CheckboxComponent
  ],
  imports: [
    CommonModule,
    CheckboxRoutingModule,
    MatCheckboxModule
  ]
})
export class CheckboxModule { }
