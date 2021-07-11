import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyComponentRoutingModule } from './lazy-component-routing.module';
import { LazyComponentComponent } from './lazy-component.component';



@NgModule({
  declarations: [LazyComponentComponent],
  imports: [
    CommonModule,
    LazyComponentRoutingModule,
    MatDialogModule
  ]
})
export class LazyComponentModule { }
