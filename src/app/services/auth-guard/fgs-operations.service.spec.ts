import { TestBed } from '@angular/core/testing';

import { FgsOperationsService } from './fgs-operations.service';

describe('FgsOperationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FgsOperationsService = TestBed.get(FgsOperationsService);
    expect(service).toBeTruthy();
  });
});
