import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadMtLocationComponent } from './upload-mt-location.component';

describe('UploadMtLocationComponent', () => {
  let component: UploadMtLocationComponent;
  let fixture: ComponentFixture<UploadMtLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadMtLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadMtLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
