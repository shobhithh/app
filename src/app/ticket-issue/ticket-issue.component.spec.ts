import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketIssueComponent } from './ticket-issue.component';

describe('TicketIssueComponent', () => {
  let component: TicketIssueComponent;
  let fixture: ComponentFixture<TicketIssueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketIssueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
