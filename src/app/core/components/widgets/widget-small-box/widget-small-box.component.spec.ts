import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetSmallBoxComponent } from './widget-small-box.component';

describe('WidgetSmallBoxComponent', () => {
  let component: WidgetSmallBoxComponent;
  let fixture: ComponentFixture<WidgetSmallBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WidgetSmallBoxComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetSmallBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
