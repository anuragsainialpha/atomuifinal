import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndentCancelConfirmationComponent } from './indent-cancel-confirmation.component';

describe('IndentCancelConfirmationComponent', () => {
  let component: IndentCancelConfirmationComponent;
  let fixture: ComponentFixture<IndentCancelConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndentCancelConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndentCancelConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
