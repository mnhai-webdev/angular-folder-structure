import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyDialogComponent } from './lazy-dialog.component';

const routes: Routes = [{ path: '', component: LazyDialogComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyDialogRoutingModule { }
