import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialUiComponent } from './material-ui.component';

const routes: Routes = [
  {
    path: '',
    component: MaterialUiComponent,
    children: [
      { path: 'date-picker', loadChildren: () => import('./date-picker/date-picker.module').then(m => m.DatePickerModule) },
      { path: 'chip', loadChildren: () => import('./chip/chip.module').then(m => m.ChipModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialUiRoutingModule { }
