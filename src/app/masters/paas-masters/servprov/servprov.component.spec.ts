import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServprovComponent } from './servprov.component';

describe('ServprovComponent', () => {
  let component: ServprovComponent;
  let fixture: ComponentFixture<ServprovComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServprovComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServprovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
