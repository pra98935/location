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
  cityName:string;
  loader:boolean = false;
  noData:boolean=false;

  locationModel:locationModel = new locationModel();

  ngOnInit() {
  
  }

  
  /**
   * get lat and lng
   * set data in local storage
   * get data from local storage if city name is available
   */
  public getCity(){ 
    this.loader = true;
    let city = this.locationModel.city.toString().toLowerCase();
    
    if (localStorage.getItem(city) === null) {
      //console.log('service call');
      this.locationService.getLatLong(city).subscribe(
        (data) => {
          // get cordinates
          let stringifyData = JSON.stringify(data);
          let parseData = JSON.parse(stringifyData);

          console.log(parseData);
          let resultCount = parseData.results.length;
          if(resultCount==0){
            this.noData = true;
            this.loader = false;
          }else{
            this.lat = parseData.results[0].geometry.location.lat;
            this.lng = parseData.results[0].geometry.location.lng;

            // set data in storage
            let cordinates = {
              'lat':this.lat,
              'lng':this.lng
            }
            this.cityName = parseData.results[0].address_components[0].short_name.toLowerCase();
            localStorage.setItem(city, JSON.stringify(cordinates));

            this.loader = false;
          }

          
      
        }
      )
    }else{
      this.noData=false;
      console.log('storage call');
      let getItemStringifyData = localStorage.getItem(city);
      let parseData = JSON.parse(getItemStringifyData);
      this.lat = parseData.lat;
      this.lng = parseData.lng;
      this.loader = false;
    }   

  }
}


