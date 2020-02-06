import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from '../icurrent-weather';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
   current: ICurrentWeather
  constructor() { 
    this.current={
      city: 'Redmond',
  country: 'USA',
  date: 1485789600,
  temperature: 40,
  description: 'sunny',
  image: ''
    } as ICurrentWeather
  }

  ngOnInit() {
  }

}
