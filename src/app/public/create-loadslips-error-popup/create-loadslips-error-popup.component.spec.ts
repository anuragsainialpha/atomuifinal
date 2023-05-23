import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLoadslipsErrorPopupComponent } from './create-loadslips-error-popup.component';

describe('CreateLoadslipsErrorPopupComponent', () => {
  let component: CreateLoadslipsErrorPopupComponent;
  let fixture: ComponentFixture<CreateLoadslipsErrorPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateLoadslipsErrorPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLoadslipsErrorPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
