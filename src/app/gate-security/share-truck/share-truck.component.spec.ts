import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareTruckComponent } from './share-truck.component';

describe('ShareTruckComponent', () => {
  let component: ShareTruckComponent;
  let fixture: ComponentFixture<ShareTruckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareTruckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareTruckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
