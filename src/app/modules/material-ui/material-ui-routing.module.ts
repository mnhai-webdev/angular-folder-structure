import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialUiComponent } from './material-ui.component';

const routes: Routes = [
  {
    path: '',
    component: MaterialUiComponent,
    children: [
      {path: 'date-picker', loadChildren: () => import('./date-picker/date-picker.module').then(m => m.DatePickerModule)},
      {path: 'chip', loadChildren: () => import('./chip/chip.module').then(m => m.ChipModule)},
      {path: 'auto-complete', loadChildren: () => import('./auto-complete/auto-complete.module').then(m => m.AutoCompleteModule)},
      {path: 'badge', loadChildren: () => import('./badge/badge.module').then(m => m.BadgeModule)},
      {path: 'button', loadChildren: () => import('./button/button.module').then(m => m.ButtonModule)},
      {path: 'button-toggle', loadChildren: () => import('./button-toggle/button-toggle.module').then(m => m.ButtonToggleModule)},
      {path: 'card', loadChildren: () => import('./card/card.module').then(m => m.CardModule)},
      {path: 'checkbox', loadChildren: () => import('./checkbox/checkbox.module').then(m => m.CheckboxModule)},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialUiRoutingModule {
}
