import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAutoCompleteComponent } from './my-auto-complete.component';
import { AutocompleteContentDirective } from './autocomplete-content.directive';
import { OptionComponent } from './option/option.component';
import { MyAutocompleteDirective } from './my-autocomplete.directive';

@NgModule({
  declarations: [
    MyAutoCompleteComponent,
    AutocompleteContentDirective,
    OptionComponent,
    MyAutocompleteDirective
  ],
  exports: [
    AutocompleteContentDirective,
    MyAutoCompleteComponent,
    OptionComponent,
    MyAutocompleteDirective
  ],
  imports: [
    CommonModule,
  ]
})
export class MyAutoCompleteModule {
}
