import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtUomComponent } from './ct-uom.component';

describe('CtUomComponent', () => {
  let component: CtUomComponent;
  let fixture: ComponentFixture<CtUomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtUomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtUomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
