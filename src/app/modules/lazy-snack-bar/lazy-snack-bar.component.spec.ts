import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazySnackBarComponent } from './lazy-snack-bar.component';

describe('LazySnackBarComponent', () => {
  let component: LazySnackBarComponent;
  let fixture: ComponentFixture<LazySnackBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazySnackBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazySnackBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
