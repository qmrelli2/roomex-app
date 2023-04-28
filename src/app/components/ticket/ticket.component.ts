import { DatePipe, NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [NgIf, DatePipe, NgClass],
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
})
export class TicketComponent {
  @Input() formData: any;
  public date = new Date();
}
