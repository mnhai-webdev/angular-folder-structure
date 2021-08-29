import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatePickerRoutingModule } from './date-picker-routing.module';
import { DatePickerComponent } from './date-picker.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
// import { MatNativeDateModule } from '@angular/material';
// import { MatMomentDateModule } from "@angular/material-moment-adapter";


@NgModule({
  declarations: [
    DatePickerComponent
  ],
  imports: [
    SharedModule,
    DatePickerRoutingModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    // MatMomentDateModule,
  ]
})
export class DatePickerModule { }
