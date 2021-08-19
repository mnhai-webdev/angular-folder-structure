import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionThreeRoutingModule } from './section-three-routing.module';
import { SectionThreeComponent } from './section-three.component';


@NgModule({
  declarations: [
    SectionThreeComponent
  ],
  imports: [
    CommonModule,
    SectionThreeRoutingModule
  ]
})
export class SectionThreeModule { }
