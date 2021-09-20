import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableEditorComponent } from './table-editor.component';

const routes: Routes = [{ path: '', component: TableEditorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableEditorRoutingModule { }
