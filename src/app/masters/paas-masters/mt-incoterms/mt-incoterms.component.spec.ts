import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtIncotermsComponent } from './mt-incoterms.component';

describe('MtIncotermsComponent', () => {
  let component: MtIncotermsComponent;
  let fixture: ComponentFixture<MtIncotermsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtIncotermsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtIncotermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
