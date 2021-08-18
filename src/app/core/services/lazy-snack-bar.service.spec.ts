import { TestBed } from '@angular/core/testing';

import { LazySnackBarService } from './lazy-snack-bar.service';

describe('LazySnackbarService', () => {
  let service: LazySnackBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LazySnackBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
