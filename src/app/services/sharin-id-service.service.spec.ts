import { TestBed } from '@angular/core/testing';

import { SharinIdServiceService } from './sharin-id-service.service';

describe('SharinIdServiceService', () => {
  let service: SharinIdServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharinIdServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
