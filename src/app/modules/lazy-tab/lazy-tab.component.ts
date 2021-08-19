import { Component, OnInit } from '@angular/core';

export interface TabItem {
  label: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-lazy-tab',
  templateUrl: './lazy-tab.component.html',
  styleUrls: ['./lazy-tab.component.scss']
})
export class LazyTabComponent implements OnInit {
  tabs: TabItem[] = [
    {
      label: 'Section 1',
      icon: 'home',
      route: 'section-one',
    },
    {
      label: 'Section 2',
      icon: 'person',
      route: 'section-two',
    },
    {
      label: 'Section 3',
      icon: 'search',
      route: 'section-three',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
