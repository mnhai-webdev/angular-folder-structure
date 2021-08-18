import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationComponent } from './confirmation.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    ConfirmationComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ]
})
export class ConfirmationModule { }
