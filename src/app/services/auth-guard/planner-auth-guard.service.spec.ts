import { TestBed } from '@angular/core/testing';

import { PlannerAuthGuardService } from './planner-auth-guard.service';

describe('PlannerAuthGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlannerAuthGuardService = TestBed.get(PlannerAuthGuardService);
    expect(service).toBeTruthy();
  });
});
