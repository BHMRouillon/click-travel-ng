import { Component, OnInit } from '@angular/core';
import { AppComponentService } from '../app-component.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  title = 'Your destination';
  tickets: any;
  ticketSelected: boolean;
  constructor(private AppComponentService: AppComponentService,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.AppComponentService.getTickets(this.route.params["code"]).subscribe(
      tickets => {
        this.tickets = tickets;
    });
  }

  getTheTicket(): void{
    this.AppComponentService.getTheTicket(this.route.params["number"]).subscribe(
      ticket => {
        this.ticketSelected = true;
    });
  }

}
