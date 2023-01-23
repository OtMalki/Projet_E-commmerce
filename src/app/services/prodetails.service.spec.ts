import { TestBed } from '@angular/core/testing';

import { ProdetailsService } from './prodetails.service';

describe('ProdetailsService', () => {
  let service: ProdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
