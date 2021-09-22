import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedAutoCompleteComponent } from './shared-auto-complete.component';

describe('SharedAutoCompleteComponent', () => {
  let component: SharedAutoCompleteComponent;
  let fixture: ComponentFixture<SharedAutoCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedAutoCompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedAutoCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
