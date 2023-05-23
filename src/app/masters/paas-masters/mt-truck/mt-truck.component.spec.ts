import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtTruckComponent } from './mt-truck.component';

describe('MtTruckComponent', () => {
  let component: MtTruckComponent;
  let fixture: ComponentFixture<MtTruckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtTruckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtTruckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
