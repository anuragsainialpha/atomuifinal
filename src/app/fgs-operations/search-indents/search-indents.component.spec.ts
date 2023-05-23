import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchIndentsComponent } from './search-indents.component';

describe('SearchIndentsComponent', () => {
  let component: SearchIndentsComponent;
  let fixture: ComponentFixture<SearchIndentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchIndentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchIndentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
