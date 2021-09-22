import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableEditorRoutingModule } from './table-editor-routing.module';
import { TableEditorComponent } from './table-editor.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { DataModule } from '../../data/data.module';
import { HttpClientModule } from '@angular/common/http';
import { StudentService } from 'src/app/data/services/student.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TableEditorComponent
  ],
  imports: [
    CommonModule,
    TableEditorRoutingModule,
    HttpClientModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    DataModule,
    FormsModule
  ],
  providers: [StudentService],
})
export class TableEditorModule {
}
