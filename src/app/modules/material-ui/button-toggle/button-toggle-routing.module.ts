import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonToggleComponent } from './button-toggle.component';

const routes: Routes = [
  {
    path: '', component: ButtonToggleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ButtonToggleRoutingModule {
}
