import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({ 
  providedIn: 'root'
})
export class LocationService {


  constructor(private http: HttpClient) { }

  public getLatLong(city){

    // let httpHeaders = new HttpHeaders ({
    //   'Content-Type': 'application/jsonp' 
    // });
    
    //return city;

    return this.http.get('http://www.datasciencetoolkit.org/maps/api/geocode/json?sensor=false&address=munich');

  }

}
