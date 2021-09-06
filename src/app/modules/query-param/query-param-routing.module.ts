import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QueryParamComponent } from './query-param.component';

const routes: Routes = [{ path: '', component: QueryParamComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QueryParamRoutingModule { }
