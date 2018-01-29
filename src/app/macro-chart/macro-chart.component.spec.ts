import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MacroChartComponent } from './macro-chart.component';

describe('MacroChartComponent', () => {
  let component: MacroChartComponent;
  let fixture: ComponentFixture<MacroChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MacroChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MacroChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
