import { TestBed } from '@angular/core/testing';

import { EconomicsIndicatorsService } from './economics-indicators.service';

describe('EconomicsIndicatorsService', () => {
  let service: EconomicsIndicatorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EconomicsIndicatorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
