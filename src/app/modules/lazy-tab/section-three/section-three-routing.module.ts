import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionThreeComponent } from './section-three.component';

const routes: Routes = [{ path: '', component: SectionThreeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionThreeRoutingModule { }
