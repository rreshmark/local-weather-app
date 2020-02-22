import { Component, OnInit } from '@angular/core';
import{FormControl, Validators} from '@angular/forms';
import { WeatherService } from '../weather.service';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css']
})
export class CitySearchComponent implements OnInit {
  //the validator is used to start searching only when there is min of 3 char in the textbox
  search= new FormControl('',[Validators.minLength(3)]);

  constructor(private weatherService:WeatherService) { }

  ngOnInit() {
    //debounce time is to wait for few seconds before hitting the api 
    //pipe is to connect two functions
    this.search.valueChanges.pipe(debounceTime(1000)).
    subscribe((searchValue:string) => 
    {
      //split will give an array.we are using map function which behaves as for loop in the array 
             //and trim if there are spaces like_red_
             // here trimext consist of the first element in the array to be trimmed
             //then it iterates to the next element in the array
             //now storing the trimmed value in a constant typr var userInput
             // which may store array (redmond,us)or single value (redmond)
           if(!this.search.invalid && searchValue){
            const userInput= searchValue.split(',').map(trimtext=>trimtext.trim());
            // ?: is ternary operator which acts as if cond. if the length is above 1 then take the index 1 element
            //else let it be undefined
            this.weatherService.getCurrentWeather(userInput[0],
              userInput.length > 1 ? userInput[1]:undefined ).subscribe(
                data => console.log(data));
              
             

           }

      }
      
    

    )
    //valuechanges is an exsting event available in any text box which listens to the event
    //and grab the newly entered data
    //it is similar to clicevent in button..here valuchange in textbox
    //in order to make this event useful..we need to subscribe to it..same as observable 
    // we are creating a variable called searchvalue in a function inside subscription which consist of the data that user has entered
    //eg "Red"..

  }

}
