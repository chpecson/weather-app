import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { WeatherComponent } from './components/weather/weather.component';
import { LocationComponent } from './components/location/location.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  entryComponents: [ 
    WeatherComponent,
    LocationComponent
  ]
})
export class AppComponent implements OnInit {
  private title: string = 'Freecodecamp weather app';

  constructor() { }

  ngOnInit() { }

}
