import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovePlanErrorsComponent } from './approve-plan-errors.component';

describe('ApprovePlanErrorsComponent', () => {
  let component: ApprovePlanErrorsComponent;
  let fixture: ComponentFixture<ApprovePlanErrorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovePlanErrorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovePlanErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
