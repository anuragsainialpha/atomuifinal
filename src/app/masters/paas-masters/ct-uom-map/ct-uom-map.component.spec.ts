import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtUomMapComponent } from './ct-uom-map.component';

describe('CtUomMapComponent', () => {
  let component: CtUomMapComponent;
  let fixture: ComponentFixture<CtUomMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtUomMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtUomMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
