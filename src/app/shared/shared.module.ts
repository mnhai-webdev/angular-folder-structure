import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { OptionsScrollDirective } from './directives/options-scroll.directive';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FilterPipe,
    OptionsScrollDirective
  ],
  declarations: [
    FilterPipe,
    OptionsScrollDirective
  ]
})
export class SharedModule {
}
