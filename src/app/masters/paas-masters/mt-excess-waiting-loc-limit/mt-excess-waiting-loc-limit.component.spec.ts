import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtExcessWaitingLocLimitComponent } from './mt-excess-waiting-loc-limit.component';

describe('MtExcessWaitingLocLimitComponent', () => {
  let component: MtExcessWaitingLocLimitComponent;
  let fixture: ComponentFixture<MtExcessWaitingLocLimitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtExcessWaitingLocLimitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtExcessWaitingLocLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
