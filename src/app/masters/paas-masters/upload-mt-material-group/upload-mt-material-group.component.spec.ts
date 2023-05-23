import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadMtMaterialGroupComponent } from './upload-mt-material-group.component';

describe('UploadMtMaterialGroupComponent', () => {
  let component: UploadMtMaterialGroupComponent;
  let fixture: ComponentFixture<UploadMtMaterialGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadMtMaterialGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadMtMaterialGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
