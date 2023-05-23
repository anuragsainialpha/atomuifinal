import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadErrorsDialogComponent } from './file-upload-errors-dialog.component';

describe('FileUploadErrorsDialogComponent', () => {
  let component: FileUploadErrorsDialogComponent;
  let fixture: ComponentFixture<FileUploadErrorsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileUploadErrorsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploadErrorsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
