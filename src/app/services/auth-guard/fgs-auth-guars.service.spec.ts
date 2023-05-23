import { TestBed } from '@angular/core/testing';

import { FgsAuthGuarsService } from './fgs-auth-guars.service';

describe('FgsAuthGuarsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FgsAuthGuarsService = TestBed.get(FgsAuthGuarsService);
    expect(service).toBeTruthy();
  });
});
