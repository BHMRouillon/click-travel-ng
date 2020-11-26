import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Destination} from './entities/destination';
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
}