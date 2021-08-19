import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyTabRoutingModule } from './lazy-tab-routing.module';
import { LazyTabComponent } from './lazy-tab.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    LazyTabComponent
  ],
  imports: [
    CommonModule,
    LazyTabRoutingModule,
    MatTabsModule,
    MatIconModule
  ]
})
export class LazyTabModule { }
