import { Directive, ElementRef, Input, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { ConnectionPositionPair, Overlay, OverlayRef } from '@angular/cdk/overlay';
import { MyAutoCompleteComponent } from './my-auto-complete.component';
import { NgControl } from '@angular/forms';
import { fromEvent } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { TemplatePortal } from '@angular/cdk/portal';
import { untilDestroyed } from 'ngx-take-until-destroy';

@Directive({
  selector: '[appAutocomplete]'
})
export class MyAutocompleteDirective implements OnInit, OnDestroy {
  @Input() appAutocomplete!: MyAutoCompleteComponent;
  private overlayRef!: OverlayRef;

  constructor(
    private host: ElementRef<HTMLInputElement>,
    private ngControl: NgControl,
    private vcr: ViewContainerRef,
    private overlay: Overlay
  ) {
  }

  get control(): any {
    return this.ngControl.control;
  }

  ngOnInit(): any {
    fromEvent(this.origin, 'focus').pipe(
      untilDestroyed(this)
    ).subscribe(() => {
      this.openDropdown();

      this.appAutocomplete.optionsClick()
        .pipe(takeUntil(this.overlayRef.detachments()))
        .subscribe((value: string) => {
          this.control.setValue(value);
          this.close();
        });
    });
  }

  openDropdown(): any {
    this.overlayRef = this.overlay.create({
      width: this.origin.offsetWidth,
      maxHeight: 40 * 3,
      backdropClass: '',
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
      positionStrategy: this.getOverlayPosition()
    });

    const template = new TemplatePortal(this.appAutocomplete.rootTemplate, this.vcr);
    this.overlayRef.attach(template);

    overlayClickOutside(this.overlayRef, this.origin).subscribe(() => this.close());
  }

  ngOnDestroy(): any {
  }

  private close(): any {
    this.overlayRef.detach();
    // @ts-ignore
    this.overlayRef = null;
  }

  private getOverlayPosition(): any {
    const positions = [
      new ConnectionPositionPair(
        {originX: 'start', originY: 'bottom'},
        {overlayX: 'start', overlayY: 'top'}
      ),
      new ConnectionPositionPair(
        {originX: 'start', originY: 'top'},
        {overlayX: 'start', overlayY: 'bottom'}
      )
    ];

    return this.overlay
      .position()
      .flexibleConnectedTo(this.origin)
      .withPositions(positions)
      .withFlexibleDimensions(false)
      .withPush(false);
  }

  get origin(): any {
    return this.host.nativeElement;
  }

}

export function overlayClickOutside(overlayRef: OverlayRef, origin: HTMLElement): any {
  return fromEvent<MouseEvent>(document, 'click')
    .pipe(
      filter(event => {
        const clickTarget = event.target as HTMLElement;
        const notOrigin = clickTarget !== origin; // the input
        const notOverlay = !!overlayRef && !overlayRef.overlayElement.contains(clickTarget); // the autocomplete
        return notOrigin && notOverlay;
      }),
      takeUntil(overlayRef.detachments())
    );
}
