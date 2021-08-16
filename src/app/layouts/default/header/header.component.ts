import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isOpenedSidebar = true;
  @Output() openedSidebarEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  openSidebar(value: boolean): void {
    this.isOpenedSidebar = !this.isOpenedSidebar;

    this.openedSidebarEvent.emit(value);
  }

}
