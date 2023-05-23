import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RdcIntransitTrucksComponent } from './rdc-intransit-trucks.component';

describe('RdcIntransitTrucksComponent', () => {
  let component: RdcIntransitTrucksComponent;
  let fixture: ComponentFixture<RdcIntransitTrucksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdcIntransitTrucksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdcIntransitTrucksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
