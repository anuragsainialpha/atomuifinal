import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingPlansComponent } from './pending-plans.component';

describe('PendingPlansComponent', () => {
  let component: PendingPlansComponent;
  let fixture: ComponentFixture<PendingPlansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingPlansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
