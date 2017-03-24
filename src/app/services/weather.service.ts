import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ILocation } from '../models/location';
import { IWeather } from '../models/weather';

@Injectable()
export class WeatherService {
  private locationUrl= 'http://ipinfo.io/geo';
  private weatherUrl= 'http://api.openweathermap.org/data/2.5/weather?q=';

  private _headers: Headers = new Headers({
    'Access-Control-Allow-Origin': '*'
  });

  constructor(private _http: Http) {}
  
  /**
   * Gets the current location based on ip.
   */
  public getLocation(): Observable<ILocation> {
    return this._http.get(this.locationUrl, { headers: this._headers })
        .map( (res) => {
          return <ILocation> res.json();
        });
  }

  /**
   * Gets the current weather based on ip.
   */
  public getCurrentWeather(city): Observable<any> {
    const UNITS: string = '&units=metric';
    const APP_ID: string = '&APPID=09fb383a8ed15fe19a265e555c1c5a45';

    return this._http.get(`${this.weatherUrl}${city}${UNITS}${APP_ID}`)
      .map((res) => {    
        return <IWeather> res.json();
    });  
  }
}
