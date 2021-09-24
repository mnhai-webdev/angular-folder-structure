import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutoCompleteRoutingModule } from './auto-complete-routing.module';
import { AutoCompleteComponent } from './auto-complete.component';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../../../data/services/user.service';
import { MyAutoCompleteModule } from '../../../shared/components/my-auto-complete/my-auto-complete.module';
import { SharedModule } from '../../../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';

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
    ReactiveFormsModule,
    MyAutoCompleteModule,
    SharedModule,
    FlexLayoutModule,
  ],
  providers: [UserService]
})
export class AutoCompleteModule {
}
