import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtValveComponent } from './mt-valve.component';

describe('MtValveComponent', () => {
  let component: MtValveComponent;
  let fixture: ComponentFixture<MtValveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtValveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtValveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
