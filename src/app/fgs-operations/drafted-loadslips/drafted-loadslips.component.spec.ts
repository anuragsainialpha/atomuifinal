import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftedLoadslipsComponent } from './drafted-loadslips.component';

describe('DraftedLoadslipsComponent', () => {
  let component: DraftedLoadslipsComponent;
  let fixture: ComponentFixture<DraftedLoadslipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraftedLoadslipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftedLoadslipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
