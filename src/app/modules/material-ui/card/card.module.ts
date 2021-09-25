import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardRoutingModule } from './card-routing.module';
import { CardComponent } from './card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    CardRoutingModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class CardModule { }
