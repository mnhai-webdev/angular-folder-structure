import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DividerRoutingModule } from './divider-routing.module';
import { DividerComponent } from './divider.component';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    DividerComponent
  ],
  imports: [
    CommonModule,
    DividerRoutingModule,
    MatDividerModule,
    FlexLayoutModule
  ]
})
export class DividerModule { }
