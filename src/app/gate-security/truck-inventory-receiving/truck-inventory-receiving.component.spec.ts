import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckInventoryReceivingComponent } from './truck-inventory-receiving.component';

describe('TruckInventoryReceivingComponent', () => {
  let component: TruckInventoryReceivingComponent;
  let fixture: ComponentFixture<TruckInventoryReceivingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruckInventoryReceivingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckInventoryReceivingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
