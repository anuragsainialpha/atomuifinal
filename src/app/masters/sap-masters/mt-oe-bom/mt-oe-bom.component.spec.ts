import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtOeBomComponent } from './mt-oe-bom.component';

describe('MtOeBomComponent', () => {
  let component: MtOeBomComponent;
  let fixture: ComponentFixture<MtOeBomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtOeBomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtOeBomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
