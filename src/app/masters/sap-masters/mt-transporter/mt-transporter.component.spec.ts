import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtTransporterComponent } from './mt-transporter.component';

describe('MtTransporterComponent', () => {
  let component: MtTransporterComponent;
  let fixture: ComponentFixture<MtTransporterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtTransporterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtTransporterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
