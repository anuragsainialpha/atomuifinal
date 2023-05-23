import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmUserRoleComponent } from './um-user-role.component';

describe('UmUserRoleComponent', () => {
  let component: UmUserRoleComponent;
  let fixture: ComponentFixture<UmUserRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmUserRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmUserRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
