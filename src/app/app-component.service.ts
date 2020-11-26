import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Destination} from './entities/destination';
import { Ticket } from './entities/ticket';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })

export class AppComponentService {

    constructor(private http: HttpClient) { }

    getDestinations(): Observable<Destination[]> { 
      return this.http.get("https://travel-api.clicksomeone.com/destinations").pipe(
        map(
          (jsonArray: Object[]) => jsonArray.map(jsonItem => Destination.fromJson(jsonItem))
        )
      );
    }

    getTickets(code: string): Observable<Ticket[]> { 
        return this.http.get("https:travel-api.clicksomeone.com/tickets?filter=%7B%0A%20%20%22where%22%3A%20%7B%20%22to%22%3A%20%22"+code+"%22%20%7D%0A%7D").pipe(
          map(
            (jsonArray: Object[]) => jsonArray.map(jsonItem => Ticket.fromJson(jsonItem))
          )
        );
      }
    
    getTheTicket(id: number): Observable<Ticket>{
        return this.http.get<Ticket>("https:travel-api.clicksomeone.com/tickets?id=" + id);
    }
}