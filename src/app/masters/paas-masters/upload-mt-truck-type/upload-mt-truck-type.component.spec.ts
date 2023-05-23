import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadMtTruckTypeComponent } from './upload-mt-truck-type.component';

describe('UploadMtTruckTypeComponent', () => {
  let component: UploadMtTruckTypeComponent;
  let fixture: ComponentFixture<UploadMtTruckTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadMtTruckTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadMtTruckTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
