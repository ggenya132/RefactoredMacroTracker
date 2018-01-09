import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MacroLayoutComponent } from './macro-layout.component';

describe('MacroLayoutComponent', () => {
  let component: MacroLayoutComponent;
  let fixture: ComponentFixture<MacroLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MacroLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MacroLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
