import { Component, OnInit } from '@angular/core';

import { ILocation } from '../../models/location';
import { IWeather } from '../../models/weather';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  private location: ILocation;

  private city: string = '';
  private weather: any = {};
  private weatherType: string = '';
  
  constructor(private _weather: WeatherService) { }

  ngOnInit() {
    this._weather.getLocation().subscribe( (location) => {
      this.city = `${location.city},${location.country}`;
      
      this._weather.getCurrentWeather(this.city).subscribe((weather) => {
        this.calculateTemperature(weather);
      }); 
    });
  }

  calculateTemperature(weather) {
    this.weather.temperature = Math.round( weather.main.temp );
    this.weather.temperatureUnit = 'C';
    this.weather.celsius = Math.round( weather.main.temp );
    this.weather.fahrenheit = Math.round( (weather.main.temp * 9) / 5 + 32 );
    this.weather.type = weather.weather[0].main;
    this.weatherType = this.weather.type;
  }

  toggleTemperatureUnit() {
    if (this.weather.temperatureUnit === 'C') {
      this.weather.temperatureUnit = 'F';
      this.weather.temperature = this.weather.fahrenheit;
    } else {
      this.weather.temperatureUnit = 'C';
      this.weather.temperature = this.weather.celsius;
    }
  }
}
