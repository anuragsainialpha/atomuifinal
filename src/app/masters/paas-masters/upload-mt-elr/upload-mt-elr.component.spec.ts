import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadMtElrComponent } from './upload-mt-elr.component';

describe('UploadMtElrComponent', () => {
  let component: UploadMtElrComponent;
  let fixture: ComponentFixture<UploadMtElrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadMtElrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadMtElrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
