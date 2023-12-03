import { TestBed } from '@angular/core/testing';

import { ApplyFormControlServiceService } from './apply-form-control-service.service';

describe('ApplyFormControlServiceService', () => {
  let service: ApplyFormControlServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplyFormControlServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
