import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';

import { MaterialUiRoutingModule } from './material-ui-routing.module';
import { MaterialUiComponent } from './material-ui.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    MaterialUiComponent
  ],
  imports: [
    SharedModule,
    RouterModule,
    MaterialUiRoutingModule
  ]
})
export class MaterialUiModule { }
