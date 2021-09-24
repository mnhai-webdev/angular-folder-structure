import { Directive, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

export interface IAutoCompleteScrollEvent {
  autoComplete: MatAutocomplete;
  scrollEvent: Event;
}

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'mat-autocomplete[scroll]'
})
export class OptionsScrollDirective implements OnDestroy {

  @Input() thresholdPercent = .8;
  // tslint:disable-next-line:no-output-rename no-output-native
  @Output('scroll') scroll = new EventEmitter<IAutoCompleteScrollEvent>();
  // tslint:disable-next-line:variable-name
  _onDestroy = new Subject();

  constructor(public autoComplete: MatAutocomplete) {
    this.autoComplete.opened.pipe(
      tap(() => {
        // /** Note: When autocomplete raises opened, panel is not yet created (by Overlay)
        //  Note: The panel will be available on next tick
        //  Note: The panel wil NOT open if there are no options to display
        //  */
        setTimeout(() => {
          /** Note: remove listner just for safety, in case the close event is skipped. */
          this.removeScrollEventListener();
          this.autoComplete.panel.nativeElement
            .addEventListener('scroll', this.onScroll.bind(this));
        });
      }),
      takeUntil(this._onDestroy)).subscribe();

    this.autoComplete.closed.pipe(
      tap(() => this.removeScrollEventListener()),
      takeUntil(this._onDestroy)).subscribe();
  }

  // tslint:disable-next-line:typedef
  private removeScrollEventListener() {
    if (this.autoComplete && this.autoComplete.panel && this.autoComplete.panel.nativeElement) {
      this.autoComplete.panel.nativeElement
        .removeEventListener('scroll', this.onScroll);
    }
  }

  // tslint:disable-next-line:typedef
  onScroll(event: any) {
    if (this.thresholdPercent === undefined) {
      this.scroll.next({autoComplete: this.autoComplete, scrollEvent: event});
    } else {
      const threshold = this.thresholdPercent * 100 * event.target.scrollHeight / 100;
      const current = event.target.scrollTop + event.target.clientHeight;
      if (current > threshold) {
        this.scroll.next({autoComplete: this.autoComplete, scrollEvent: event});
      }
    }
  }

  // tslint:disable-next-line:typedef
  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
    this.removeScrollEventListener();
  }
}
