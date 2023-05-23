import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RdcIntransitTrucksReportComponent } from './rdc-intransit-trucks-report.component';

describe('RdcIntransitTrucksReportComponent', () => {
  let component: RdcIntransitTrucksReportComponent;
  let fixture: ComponentFixture<RdcIntransitTrucksReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdcIntransitTrucksReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdcIntransitTrucksReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
