import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingProtocolEntryComponent } from './training-protocol-entry.component';

describe('TrainingProtocolEntryComponent', () => {
  let component: TrainingProtocolEntryComponent;
  let fixture: ComponentFixture<TrainingProtocolEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingProtocolEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingProtocolEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
