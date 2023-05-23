import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadslipCancelPopupComponent } from './loadslip-cancel-popup.component';

describe('LoadslipCancelPopupComponent', () => {
  let component: LoadslipCancelPopupComponent;
  let fixture: ComponentFixture<LoadslipCancelPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadslipCancelPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadslipCancelPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
