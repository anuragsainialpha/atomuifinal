import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtMaterialGroupComponent } from './mt-material-group.component';

describe('MtMaterialGroupComponent', () => {
  let component: MtMaterialGroupComponent;
  let fixture: ComponentFixture<MtMaterialGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtMaterialGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtMaterialGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
