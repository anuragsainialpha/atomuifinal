import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualPlanComponent } from './manual-plan.component';

describe('ManualPlanComponent', () => {
  let component: ManualPlanComponent;
  let fixture: ComponentFixture<ManualPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
