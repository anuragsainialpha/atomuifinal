import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtTruckDedicatedComponent } from './mt-truck-dedicated.component';

describe('MtTruckDedicatedComponent', () => {
  let component: MtTruckDedicatedComponent;
  let fixture: ComponentFixture<MtTruckDedicatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtTruckDedicatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtTruckDedicatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
