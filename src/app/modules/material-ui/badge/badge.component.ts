import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatBadge } from '@angular/material/badge';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit, AfterViewInit {
  @ViewChild(MatBadge) badge!: MatBadge;
  hideMatBadge!: boolean;
  badgeCounter!: number;

  constructor() {
  }


  ngAfterViewInit(): void {
    const after = this.badge.isAfter();
    console.log(after);
    const above = this.badge.isAbove();
    console.log(above);
    const html = this.badge.getBadgeElement();
    console.log(html);
  }

  ngOnInit(): void {
    this.hideMatBadge = true;
    this.badgeCounter = 0;
  }

  incrementCount(): void {
    this.badgeCounter++;
    this.hideMatBadge = false;
  }

  decreaseCount(): void {
    if (this.badgeCounter < 0) {
      return;
    }
    this.badgeCounter--;
    if (this.badgeCounter === 0) {
      this.hideMatBadge = true;
    }
  }

  resetCount(): void {
    this.badgeCounter = 0;
    this.hideMatBadge = true;
  }

}
