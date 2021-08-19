import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionTwoComponent } from './section-two.component';

const routes: Routes = [{ path: '', component: SectionTwoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionTwoRoutingModule { }
