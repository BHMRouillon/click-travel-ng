import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { AppComponentService } from './app-component.service';
import { Destination} from './entities/destination';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  constructor(private AppComponentService: AppComponentService) { }

  destinations: any;

  ngOnInit(): void {
    this.AppComponentService.getDestinations().pipe(
      map(
        (destinations: Destination[]) => destinations.filter(
          (destination: Destination) => destination.isDreamDestination === true
        )
      )
    )
    .subscribe(
      destinations => {
        this.destinations = destinations;
    });
  }

  title = 'Choose your dream destination...';
}
