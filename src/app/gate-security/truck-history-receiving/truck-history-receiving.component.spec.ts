import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckHistoryReceivingComponent } from './truck-history-receiving.component';

describe('TruckHistoryReceivingComponent', () => {
  let component: TruckHistoryReceivingComponent;
  let fixture: ComponentFixture<TruckHistoryReceivingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruckHistoryReceivingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckHistoryReceivingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
