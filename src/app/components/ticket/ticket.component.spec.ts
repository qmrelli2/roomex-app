import { TestBed } from '@angular/core/testing';
import { TicketComponent } from './ticket.component';
import { By } from '@angular/platform-browser';

describe('TicketComponent', () => {
  let currentDate = new Date();

  beforeEach(() => {
    jasmine.clock().mockDate(currentDate);
    TestBed.configureTestingModule({
      imports: [TicketComponent],
    }).compileComponents();
  });
  it('Component should be created', () => {
    const fixture = TestBed.createComponent(TicketComponent);
    const ticketComponent = fixture.debugElement.componentInstance;
    expect(ticketComponent).toBeTruthy();
  });
  it('Date should be current date', () => {
    const fixture = TestBed.createComponent(TicketComponent);
    const ticketComponent = fixture.debugElement.componentInstance;
    expect(ticketComponent.date).toEqual(currentDate);
  });
  it('formData input should be undefined on initial state', () => {
    const fixture = TestBed.createComponent(TicketComponent);
    const ticketComponent = fixture.debugElement.componentInstance;
    expect(ticketComponent.formData).toBeUndefined();
  });
  it('ticket should be visible', () => {
    const fixture = TestBed.createComponent(TicketComponent);
    const element = fixture.debugElement.query(By.css('.ticket'));
    expect(element).toBeTruthy();
  });
});
