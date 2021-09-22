import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutoCompleteRoutingModule } from './auto-complete-routing.module';
import { AutoCompleteComponent } from './auto-complete.component';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../../../data/services/user.service';


@NgModule({
  declarations: [
    AutoCompleteComponent
  ],
  imports: [
    CommonModule,
    AutoCompleteRoutingModule,
    HttpClientModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule
  ],
  providers: [UserService]
})
export class AutoCompleteModule { }
