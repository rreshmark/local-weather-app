import { Injectable } from '@angular/core';
import { IWeatherService } from './iweather-service';
import { ICurrentWeather } from './icurrent-weather';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherFakeService implements IWeatherService{
private fakeweather : ICurrentWeather={
  city : 'Redmond',
  country: 'US',
  date: 1485789600,
  image: '',
  temperature: 280.30,
  description:'cloudy'
}
  constructor() {}
  
    public getCurrentWeather(searchText:string|number, country?:string) 
    // the function should be public because we are implementing it from the interface
    :Observable<ICurrentWeather>{
      return of(this.fakeweather);
      // of keyword is used here to return the fake weather data as observable object 
        // make an observbleout "OF" this //

      
    }
   
  }
