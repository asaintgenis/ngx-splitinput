import { TestBed } from '@angular/core/testing';

import { SplitInputService } from './split-input.service';

describe('SplitInputService', () => {
  let service: SplitInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SplitInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
