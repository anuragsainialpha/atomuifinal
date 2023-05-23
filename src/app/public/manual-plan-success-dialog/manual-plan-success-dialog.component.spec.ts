import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualPlanSuccessDialogComponent } from './manual-plan-success-dialog.component';

describe('ManualPlanSuccessDialogComponent', () => {
  let component: ManualPlanSuccessDialogComponent;
  let fixture: ComponentFixture<ManualPlanSuccessDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualPlanSuccessDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualPlanSuccessDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
