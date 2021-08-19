import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyDialogRoutingModule } from './lazy-dialog-routing.module';
import { LazyDialogComponent } from './lazy-dialog.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    LazyDialogComponent
  ],
    imports: [
        CommonModule,
        LazyDialogRoutingModule,
        MatButtonModule
    ]
})
export class LazyDialogModule { }
