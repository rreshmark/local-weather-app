import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentWeatherComponent } from './current-weather.component';
import { WeatherService } from '../weather.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { WeatherFakeService } from '../weather-fake.service';

describe('CurrentWeatherComponent', () => {
  let component: CurrentWeatherComponent;
  let fixture: ComponentFixture<CurrentWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ CurrentWeatherComponent ],
      providers: [{provide:WeatherService, useClass: WeatherFakeService}]
      //telling the spec file that u are supposed toprovide for "weatherservice"
      //but instead u r going to use a class called wethaerfake service
      // to tell it simpler..wherever there are asking for weatherservice as part of testing
      //pass them the weatherfakeservice 
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
