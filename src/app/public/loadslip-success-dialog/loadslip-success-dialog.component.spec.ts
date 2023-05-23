import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadslipSuccessDialogComponent } from './loadslip-success-dialog.component';

describe('LoadslipSuccessDialogComponent', () => {
  let component: LoadslipSuccessDialogComponent;
  let fixture: ComponentFixture<LoadslipSuccessDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadslipSuccessDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadslipSuccessDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
