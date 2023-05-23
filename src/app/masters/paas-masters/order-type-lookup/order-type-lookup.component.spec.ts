import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderTypeLookupComponent } from './order-type-lookup.component';

describe('OrderTypeLookupComponent', () => {
  let component: OrderTypeLookupComponent;
  let fixture: ComponentFixture<OrderTypeLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderTypeLookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderTypeLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
