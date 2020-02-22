import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ICurrentWeatherData } from './icurrent-weather-data';
import { environment } from 'src/environments/environment';
import { ICurrentWeather } from './icurrent-weather';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IWeatherService } from './iweather-service';

@Injectable({
  providedIn: 'root'
})
export class WeatherService implements IWeatherService {

  constructor(private httpclient: HttpClient) { }
  getCurrentWeather(searchText: string|number, country?: string): Observable<ICurrentWeather>{
//we are making changes in url..the user can enter city | i.e (or) zip..(?: is optional)
// in the below line we are checking if the user has entered city or zip..
//to verify that we are creating a var uriparams and checking if it is a string or number
   let uriParams='';
   // we are using 'let' here because the value of uriParams is going to change further
    //typeof is used to check what type of data he user is getting from the text field
   if(typeof searchText=== 'string'){
     uriParams = `q=${searchText}`
   }
   else{
     uriParams =`zip=${searchText}`
   }

   if(country){
     uriParams =`${uriParams},q=${searchText}`
   }




    var url:string = `${environment.baseUrl}api.openweathermap.org/data/2.5/weather?${uriParams}
    &appid=${environment.appId}`;
    //console.log("resh url is " + url);

    var received = this.httpclient.get<ICurrentWeatherData>(url);
    //console.log("resh url1 is " + JSON.stringify(received));
    return received.pipe(map(data => this.transformToICurrentWeather(data)));

  }
   
  private transformToICurrentWeather(data: ICurrentWeatherData) : ICurrentWeather{
    //console.log("resh url2 is " + JSON.stringify(data));
    return {
      city: data.name,
      country: data.sys.country,
      date: data.dt * 1000,
      image: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
      temperature: this.convertKelvinToFahrenheit(data.main.temp),
      description: data.weather[0].description
    }
  }

  private convertKelvinToFahrenheit(kelvin: number): number{
    return kelvin * 9 / 5 - 459.67;
  }

}
