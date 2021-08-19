import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyTabComponent } from './lazy-tab.component';

describe('LazyTabComponent', () => {
  let component: LazyTabComponent;
  let fixture: ComponentFixture<LazyTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
