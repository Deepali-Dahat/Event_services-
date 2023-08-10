import { TestBed } from '@angular/core/testing';

import { ManageServiceServiceService } from './manage-service-service.service';

describe('ManageServiceServiceService', () => {
  let service: ManageServiceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageServiceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
