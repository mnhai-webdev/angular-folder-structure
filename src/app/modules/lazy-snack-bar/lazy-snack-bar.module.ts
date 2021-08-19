import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazySnackBarRoutingModule } from './lazy-snack-bar-routing.module';
import { LazySnackBarComponent } from './lazy-snack-bar.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    LazySnackBarComponent
  ],
    imports: [
        CommonModule,
        LazySnackBarRoutingModule,
        MatButtonModule
    ]
})
export class LazySnackBarModule { }
