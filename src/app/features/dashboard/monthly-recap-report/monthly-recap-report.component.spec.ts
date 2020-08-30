import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyRecapReportComponent } from './monthly-recap-report.component';

describe('MonthlyRecapReportComponent', () => {
  let component: MonthlyRecapReportComponent;
  let fixture: ComponentFixture<MonthlyRecapReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MonthlyRecapReportComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyRecapReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
