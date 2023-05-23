import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtOtmFreightBasisComponent } from './ct-otm-freight-basis.component';

describe('CtOtmFreightBasisComponent', () => {
  let component: CtOtmFreightBasisComponent;
  let fixture: ComponentFixture<CtOtmFreightBasisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtOtmFreightBasisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtOtmFreightBasisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
