import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedAutoCompleteComponent } from './shared-auto-complete.component';

const routes: Routes = [
  {
    path: '',
    component: SharedAutoCompleteComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedAutoCompleteRoutingModule { }
