import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FgsViewPlansComponent } from './fgs-view-plans.component';

describe('FgsViewPlansComponent', () => {
  let component: FgsViewPlansComponent;
  let fixture: ComponentFixture<FgsViewPlansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FgsViewPlansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FgsViewPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
