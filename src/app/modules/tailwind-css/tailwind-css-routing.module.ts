import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TailwindCssComponent } from './tailwind-css.component';

const routes: Routes = [{ path: '', component: TailwindCssComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TailwindCssRoutingModule { }
