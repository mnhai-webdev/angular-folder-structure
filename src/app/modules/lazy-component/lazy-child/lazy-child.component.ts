import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-child',
  templateUrl: './lazy-child.component.html',
  styleUrls: ['./lazy-child.component.scss']
})
export class LazyChildComponent implements OnInit {

  data: string = '';
  emitter: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  emit() {
    this.emitter.emit("Emited");
  }

}
