import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineStoreVisitorsComponent } from './online-store-visitors.component';

describe('OnlineStoreVisitorsComponent', () => {
  let component: OnlineStoreVisitorsComponent;
  let fixture: ComponentFixture<OnlineStoreVisitorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OnlineStoreVisitorsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineStoreVisitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
