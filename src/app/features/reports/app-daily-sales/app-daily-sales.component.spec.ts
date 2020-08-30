import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDailySalesComponent } from './app-daily-sales.component';

describe('AppDailySalesComponent', () => {
  let component: AppDailySalesComponent;
  let fixture: ComponentFixture<AppDailySalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppDailySalesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDailySalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
