import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyPlanDeleteConfirmationComponent } from './modify-plan-delete-confirmation.component';

describe('ModifyPlanDeleteConfirmationComponent', () => {
  let component: ModifyPlanDeleteConfirmationComponent;
  let fixture: ComponentFixture<ModifyPlanDeleteConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyPlanDeleteConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyPlanDeleteConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
