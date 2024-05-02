import { TestBed } from '@angular/core/testing';

import { PrtableService } from './prtable.service';

describe('PrtableService', () => {
  let service: PrtableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrtableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
