import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedAutoCompleteRoutingModule } from './shared-auto-complete-routing.module';
import { SharedAutoCompleteComponent } from './shared-auto-complete.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyAutoCompleteModule } from '../../shared/components/my-auto-complete/my-auto-complete.module';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    SharedAutoCompleteComponent
  ],
  imports: [
    CommonModule,
    SharedAutoCompleteRoutingModule,
    ReactiveFormsModule,
    MyAutoCompleteModule,
    SharedModule
  ]
})
export class SharedAutoCompleteModule { }
