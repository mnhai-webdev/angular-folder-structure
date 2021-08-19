import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionOneComponent } from './section-one.component';

const routes: Routes = [{ path: '', component: SectionOneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionOneRoutingModule { }
