import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadMtBatchCodesComponent } from './upload-mt-batch-codes.component';

describe('UploadMtBatchCodesComponent', () => {
  let component: UploadMtBatchCodesComponent;
  let fixture: ComponentFixture<UploadMtBatchCodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadMtBatchCodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadMtBatchCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
