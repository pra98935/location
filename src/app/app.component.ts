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
  lat:number;
  lng:number;
  loader:boolean = false;

  locationModel:locationModel = new locationModel();

  ngOnInit() {
  
  }

  

  public getCity(){
    this.loader = true;
    let city = this.locationModel.city.toString().toLowerCase();
    
    this.locationService.getLatLong(city).subscribe(
      (data) => {
        let stringifyData = JSON.stringify(data);
        let parseData = JSON.parse(stringifyData);
    
        this.lat = parseData.results[0].geometry.location.lat;
        this.lng = parseData.results[0].geometry.location.lng;
        this.loader = false;
    
      }
    ) 
  }
}


