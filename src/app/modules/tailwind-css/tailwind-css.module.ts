import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TailwindCssRoutingModule } from './tailwind-css-routing.module';
import { TailwindCssComponent } from './tailwind-css.component';


@NgModule({
  declarations: [
    TailwindCssComponent
  ],
  imports: [
    CommonModule,
    TailwindCssRoutingModule
  ]
})
export class TailwindCssModule { }
