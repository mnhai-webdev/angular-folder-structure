import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { mapTo } from 'rxjs/operators';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss']
})
export class OptionComponent implements OnInit {
  @Input() value!: string;
  click$!: Observable<string>;

  constructor(private host: ElementRef) {
  }

  ngOnInit(): void {
    this.click$ = fromEvent(this.element, 'click').pipe(mapTo(this.value));
  }

  get element(): any {
    return this.host.nativeElement;
  }

}
