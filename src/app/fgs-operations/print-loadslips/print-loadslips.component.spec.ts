import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintLoadslipsComponent } from './print-loadslips.component';

describe('PrintLoadslipsComponent', () => {
  let component: PrintLoadslipsComponent;
  let fixture: ComponentFixture<PrintLoadslipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintLoadslipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintLoadslipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
