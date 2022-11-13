import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey='3997e013bd78607f78a8e6c94cbc4df3';
  URI: string='';

  constructor(private http: HttpClient) { 
    this.URI=`https://api.openweathermap.org/data/2.5/weather?&appid=${this.apiKey}&q=`;
  }

  getWeather(cityName: string){
    return this.http.get(`${this.URI}${cityName}`);
  }
  
}
