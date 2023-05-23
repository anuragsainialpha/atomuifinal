import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtCustomerShipToComponent } from './mt-customer-ship-to.component';

describe('MtCustomerShipToComponent', () => {
  let component: MtCustomerShipToComponent;
  let fixture: ComponentFixture<MtCustomerShipToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtCustomerShipToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtCustomerShipToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
