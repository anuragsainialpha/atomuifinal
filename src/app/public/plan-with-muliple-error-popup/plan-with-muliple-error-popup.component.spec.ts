import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanWithMulipleErrorPopupComponent } from './plan-with-muliple-error-popup.component';

describe('PlanWithMulipleErrorPopupComponent', () => {
  let component: PlanWithMulipleErrorPopupComponent;
  let fixture: ComponentFixture<PlanWithMulipleErrorPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanWithMulipleErrorPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanWithMulipleErrorPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
