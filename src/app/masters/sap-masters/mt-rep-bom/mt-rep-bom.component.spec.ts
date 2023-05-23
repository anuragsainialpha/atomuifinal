import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtRepBomComponent } from './mt-rep-bom.component';

describe('MtRepBomComponent', () => {
  let component: MtRepBomComponent;
  let fixture: ComponentFixture<MtRepBomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtRepBomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtRepBomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
