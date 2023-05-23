import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadLocationBayComponent } from './upload-location-bay.component';

describe('UploadLocationBayComponent', () => {
  let component: UploadLocationBayComponent;
  let fixture: ComponentFixture<UploadLocationBayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadLocationBayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadLocationBayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
