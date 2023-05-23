import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtElrComponent } from './mt-elr.component';

describe('MtElrComponent', () => {
  let component: MtElrComponent;
  let fixture: ComponentFixture<MtElrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtElrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtElrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
