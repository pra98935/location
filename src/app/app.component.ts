import { Component } from '@angular/core';
import { LocationService } from './location.service';
import {locationModel} from './model/location';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private locationService : LocationService) { }
  title = 'getlocation';
  public locations = [];

  locationModel:locationModel = new locationModel();

  ngOnInit() {
  
  }

  

  public getCity(){
    // let city = this.locationModel.city.toString().toLowerCase();
    let city = this.locationModel.city;
    this.locationService.getLatLong(city).subscribe(
      (data) => {
      console.log('data '+JSON.stringify(data));
      }
    ) 
  }
}


