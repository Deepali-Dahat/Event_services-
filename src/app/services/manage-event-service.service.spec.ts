import { TestBed } from '@angular/core/testing';

import { ManageEventServiceService } from './manage-event-service.service';

describe('ManageEventServiceService', () => {
  let service: ManageEventServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageEventServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
