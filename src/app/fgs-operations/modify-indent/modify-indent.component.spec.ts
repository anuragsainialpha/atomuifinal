import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyIndentComponent } from './modify-indent.component';

describe('ModifyIndentComponent', () => {
  let component: ModifyIndentComponent;
  let fixture: ComponentFixture<ModifyIndentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyIndentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyIndentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
