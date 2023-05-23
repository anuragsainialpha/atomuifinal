import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckHistoryShippingComponent } from './truck-history-shipping.component';

describe('TruckHistoryShippingComponent', () => {
  let component: TruckHistoryShippingComponent;
  let fixture: ComponentFixture<TruckHistoryShippingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruckHistoryShippingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckHistoryShippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
