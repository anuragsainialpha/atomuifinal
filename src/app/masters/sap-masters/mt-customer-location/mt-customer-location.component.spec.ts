import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtCustomerLocationComponent } from './mt-customer-location.component';

describe('MtCustomerLocationComponent', () => {
  let component: MtCustomerLocationComponent;
  let fixture: ComponentFixture<MtCustomerLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtCustomerLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtCustomerLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
