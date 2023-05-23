import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadLocationScanComponent } from './upload-location-scan.component';

describe('UploadLocationScanComponent', () => {
  let component: UploadLocationScanComponent;
  let fixture: ComponentFixture<UploadLocationScanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadLocationScanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadLocationScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
