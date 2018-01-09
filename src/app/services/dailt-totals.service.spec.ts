import { TestBed, inject } from '@angular/core/testing';

import { DailtTotalsService } from './daily-totals.service';

describe('DailtTotalsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DailtTotalsService]
    });
  });

  it('should be created', inject([DailtTotalsService], (service: DailtTotalsService) => {
    expect(service).toBeTruthy();
  }));
});
