import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionOneRoutingModule } from './section-one-routing.module';
import { SectionOneComponent } from './section-one.component';


@NgModule({
  declarations: [
    SectionOneComponent
  ],
  imports: [
    CommonModule,
    SectionOneRoutingModule
  ]
})
export class SectionOneModule { }
