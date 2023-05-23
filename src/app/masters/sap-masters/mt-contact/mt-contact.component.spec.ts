import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtContactComponent } from './mt-contact.component';

describe('MtContactComponent', () => {
  let component: MtContactComponent;
  let fixture: ComponentFixture<MtContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
