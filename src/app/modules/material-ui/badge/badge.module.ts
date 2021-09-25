import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BadgeRoutingModule } from './badge-routing.module';
import { BadgeComponent } from './badge.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    BadgeComponent
  ],
  imports: [
    CommonModule,
    BadgeRoutingModule,
    MatBadgeModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class BadgeModule { }
