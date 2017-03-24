import { Component, OnInit } from '@angular/core';

import { ILocation } from '../../models/location';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  public location: ILocation;
  public city: string;

  constructor(private _weather: WeatherService) { }

  ngOnInit() {
    this._weather.getLocation().subscribe( (location) => {
      this.location = location;
      this.city = `${this.location.city}, ${this.location.country}`     
    });
  }

}
