import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChipRoutingModule } from './chip-routing.module';
import { ChipComponent } from './chip.component';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    ChipComponent
  ],
  imports: [
    SharedModule,
    ChipRoutingModule,
    MatInputModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatIconModule,
  ]
})
export class ChipModule { }
