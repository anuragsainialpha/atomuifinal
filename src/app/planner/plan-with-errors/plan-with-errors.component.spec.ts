import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanWithErrorsComponent } from './plan-with-errors.component';

describe('PlanWithErrorsComponent', () => {
  let component: PlanWithErrorsComponent;
  let fixture: ComponentFixture<PlanWithErrorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanWithErrorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanWithErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
