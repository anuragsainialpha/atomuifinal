import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadMtSapTruckTypeComponent } from './upload-mt-sap-truck-type.component';

describe('UploadMtSapTruckTypeComponent', () => {
  let component: UploadMtSapTruckTypeComponent;
  let fixture: ComponentFixture<UploadMtSapTruckTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadMtSapTruckTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadMtSapTruckTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
