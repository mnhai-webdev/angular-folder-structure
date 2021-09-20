import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableEditorRoutingModule } from './table-editor-routing.module';
import { TableEditorComponent } from './table-editor.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '../../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { DataModule } from '../../data/data.module';


@NgModule({
  declarations: [
    TableEditorComponent
  ],
  imports: [
    CommonModule,
    TableEditorRoutingModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule,
    SharedModule,
    MatButtonModule,
    DataModule
  ]
})
export class TableEditorModule { }
