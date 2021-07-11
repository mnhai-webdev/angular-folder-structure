import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lazy2aComponent } from './lazy2a.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [Lazy2aComponent],
    imports: [
        CommonModule,
        MatDialogModule
    ]
})
export class Lazy2aModule { }
