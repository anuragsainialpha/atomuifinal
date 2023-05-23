import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtLocationBayComponent } from './mt-location-bay.component';

describe('MtLocationBayComponent', () => {
  let component: MtLocationBayComponent;
  let fixture: ComponentFixture<MtLocationBayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtLocationBayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtLocationBayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
