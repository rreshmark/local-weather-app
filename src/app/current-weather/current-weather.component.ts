import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from '../icurrent-weather';
import { WeatherService } from '../weather.service';
import { IWeatherService } from '../iweather-service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
   current: ICurrentWeather
  constructor(private weatherService:WeatherService)
  //as u have mentioned in the c.w component spec file that u are 
  //providing with the fakeservice 
  // we can use ":WeatherService " instead of "Iweatherservice"
   { 
    
  }

  ngOnInit() {
    this.weatherService.getCurrentWeather('Bethesda','US')
    .subscribe( data => this.current= data)
  }

}
