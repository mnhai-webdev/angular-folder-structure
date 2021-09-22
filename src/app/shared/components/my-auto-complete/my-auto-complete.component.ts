import { Component, ContentChild, ContentChildren, OnInit, QueryList, TemplateRef, ViewChild } from '@angular/core';
import { AutocompleteContentDirective } from './autocomplete-content.directive';
import { OptionComponent } from './option/option.component';
import { switchMap } from 'rxjs/operators';
import { merge } from 'rxjs';

@Component({
  selector: 'app-my-auto-complete',
  templateUrl: './my-auto-complete.component.html',
  exportAs: 'appAutocomplete',
  styleUrls: ['./my-auto-complete.component.scss']
})
export class MyAutoCompleteComponent implements OnInit {
  @ViewChild('root') rootTemplate!: TemplateRef<any>;

  @ContentChild(AutocompleteContentDirective)
  content!: AutocompleteContentDirective;

  @ContentChildren(OptionComponent) options!: QueryList<OptionComponent>;

  constructor() {
  }

  ngOnInit(): void {
  }

  optionsClick(): any {
    return this.options.changes.pipe(
      switchMap(options => {
        const clicks$ = options.map((option: { click$: any; }) => option.click$);
        return merge(...clicks$);
      })
    );
  }

}
