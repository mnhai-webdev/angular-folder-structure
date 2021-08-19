import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazySnackBarComponent } from './lazy-snack-bar.component';

const routes: Routes = [{ path: '', component: LazySnackBarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazySnackBarRoutingModule { }
