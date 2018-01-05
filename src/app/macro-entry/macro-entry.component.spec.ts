import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MacroEntryComponent } from './macro-entry.component';

describe('MacroEntryComponent', () => {
  let component: MacroEntryComponent;
  let fixture: ComponentFixture<MacroEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MacroEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MacroEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
