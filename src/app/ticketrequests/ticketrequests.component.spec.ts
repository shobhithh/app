import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketrequestsComponent } from './ticketrequests.component';

describe('TicketrequestsComponent', () => {
  let component: TicketrequestsComponent;
  let fixture: ComponentFixture<TicketrequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketrequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketrequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
