import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  weatherInfo: any;
  
constructor(private weather: WeatherService){

}

  ngOnInit(): void {

  }

  getWeather(cityName: string){
    this.weather.getWeather(cityName)
    .subscribe(
      res=>(
        console.log(this.weatherInfo=res)
        ),
      err => console.log(err)
    )
  }


  submitLocation(cityname: HTMLInputElement){

    if(cityname.value){
      this.getWeather(cityname.value)
      console.log(cityname.value)
      cityname.value='';
      
      
    }else{
      alert('Porfavor ingresa un dato');
    }
    cityname.focus();
    return false;
    
  }
}
