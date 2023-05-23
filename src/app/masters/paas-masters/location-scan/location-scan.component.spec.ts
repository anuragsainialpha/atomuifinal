import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationScanComponent } from './location-scan.component';

describe('LocationScanComponent', () => {
  let component: LocationScanComponent;
  let fixture: ComponentFixture<LocationScanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationScanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
