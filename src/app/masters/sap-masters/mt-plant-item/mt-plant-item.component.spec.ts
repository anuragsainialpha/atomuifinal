import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtPlantItemComponent } from './mt-plant-item.component';

describe('MtPlantItemComponent', () => {
  let component: MtPlantItemComponent;
  let fixture: ComponentFixture<MtPlantItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtPlantItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtPlantItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
