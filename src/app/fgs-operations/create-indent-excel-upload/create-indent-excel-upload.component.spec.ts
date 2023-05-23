import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateIndentExcelUploadComponent } from './create-indent-excel-upload.component';

describe('CreateIndentExcelUploadComponent', () => {
  let component: CreateIndentExcelUploadComponent;
  let fixture: ComponentFixture<CreateIndentExcelUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateIndentExcelUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateIndentExcelUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
