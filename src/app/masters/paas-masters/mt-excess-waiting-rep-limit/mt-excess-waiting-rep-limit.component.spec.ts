import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtExcessWaitingRepLimitComponent } from './mt-excess-waiting-rep-limit.component';

describe('MtExcessWaitingRepLimitComponent', () => {
  let component: MtExcessWaitingRepLimitComponent;
  let fixture: ComponentFixture<MtExcessWaitingRepLimitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtExcessWaitingRepLimitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtExcessWaitingRepLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
