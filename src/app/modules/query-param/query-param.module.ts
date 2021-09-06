import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QueryParamRoutingModule } from './query-param-routing.module';
import { QueryParamComponent } from './query-param.component';


@NgModule({
  declarations: [
    QueryParamComponent
  ],
  imports: [
    CommonModule,
    QueryParamRoutingModule
  ]
})
export class QueryParamModule { }
