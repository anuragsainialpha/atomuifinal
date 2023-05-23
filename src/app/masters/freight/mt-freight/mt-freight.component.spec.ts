import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtFreightComponent } from './mt-freight.component';

describe('MtFreightComponent', () => {
  let component: MtFreightComponent;
  let fixture: ComponentFixture<MtFreightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtFreightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtFreightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
