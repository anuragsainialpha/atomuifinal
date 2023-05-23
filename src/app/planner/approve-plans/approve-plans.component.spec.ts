import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovePlansComponent } from './approve-plans.component';

describe('ApprovePlansComponent', () => {
  let component: ApprovePlansComponent;
  let fixture: ComponentFixture<ApprovePlansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovePlansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovePlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
