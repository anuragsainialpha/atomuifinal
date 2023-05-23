import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtSapTruckTypeComponent } from './mt-sap-truck-type.component';

describe('MtSapTruckTypeComponent', () => {
  let component: MtSapTruckTypeComponent;
  let fixture: ComponentFixture<MtSapTruckTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtSapTruckTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtSapTruckTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
