import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadslipPlannerViewComponent } from './loadslip-planner-view.component';

describe('LoadslipPlannerViewComponent', () => {
  let component: LoadslipPlannerViewComponent;
  let fixture: ComponentFixture<LoadslipPlannerViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadslipPlannerViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadslipPlannerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
