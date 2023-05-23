import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelledLoadslipsComponent } from './cancelled-loadslips.component';

describe('CancelledLoadslipsComponent', () => {
  let component: CancelledLoadslipsComponent;
  let fixture: ComponentFixture<CancelledLoadslipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelledLoadslipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelledLoadslipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
