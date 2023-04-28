import { AsyncPipe, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TicketComponent } from 'src/app/components/ticket/ticket.component';
import { DataService } from 'src/app/services/data.service';

@Component({
  standalone: true,
  imports: [RouterLink, NgIf, AsyncPipe, TicketComponent],
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})
export class ResultPage {
  public dataService = inject(DataService);
}
