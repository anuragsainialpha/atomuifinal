import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtTruckTypeComponent } from './mt-truck-type.component';

describe('MtTruckTypeComponent', () => {
  let component: MtTruckTypeComponent;
  let fixture: ComponentFixture<MtTruckTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtTruckTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtTruckTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
