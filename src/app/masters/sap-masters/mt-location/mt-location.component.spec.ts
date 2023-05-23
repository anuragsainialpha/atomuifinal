import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtLocationComponent } from './mt-location.component';

describe('MtLocationComponent', () => {
  let component: MtLocationComponent;
  let fixture: ComponentFixture<MtLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
