import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtCustomerComponent } from './mt-customer.component';

describe('MtCustomerComponent', () => {
  let component: MtCustomerComponent;
  let fixture: ComponentFixture<MtCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
