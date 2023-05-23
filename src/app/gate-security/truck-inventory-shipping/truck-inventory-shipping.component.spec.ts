import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckInventoryShippingComponent } from './truck-inventory-shipping.component';

describe('TruckInventoryShippingComponent', () => {
  let component: TruckInventoryShippingComponent;
  let fixture: ComponentFixture<TruckInventoryShippingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruckInventoryShippingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckInventoryShippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
