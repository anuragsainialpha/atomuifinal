import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLoadSlipComponent } from './create-load-slip.component';

describe('CreateLoadSlipComponent', () => {
  let component: CreateLoadSlipComponent;
  let fixture: ComponentFixture<CreateLoadSlipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateLoadSlipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLoadSlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
