import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmUserAssociationComponent } from './um-user-association.component';

describe('UmUserAssociationComponent', () => {
  let component: UmUserAssociationComponent;
  let fixture: ComponentFixture<UmUserAssociationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmUserAssociationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmUserAssociationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
