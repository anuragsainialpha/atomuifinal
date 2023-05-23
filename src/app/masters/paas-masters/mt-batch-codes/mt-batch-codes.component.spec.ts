import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtBatchCodesComponent } from './mt-batch-codes.component';

describe('MtBatchCodesComponent', () => {
  let component: MtBatchCodesComponent;
  let fixture: ComponentFixture<MtBatchCodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtBatchCodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtBatchCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
