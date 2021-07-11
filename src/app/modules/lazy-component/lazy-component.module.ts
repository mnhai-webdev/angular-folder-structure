import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyComponentRoutingModule } from './lazy-component-routing.module';
import { LazyComponentComponent } from './lazy-component.component';
import { LazyCompAComponent } from './lazy-comp-a/lazy-comp-a.component';
import { LazyChildComponent } from './lazy-child/lazy-child.component';


@NgModule({
  declarations: [LazyComponentComponent, LazyCompAComponent, LazyChildComponent],
  imports: [
    CommonModule,
    LazyComponentRoutingModule
  ]
})
export class LazyComponentModule { }
