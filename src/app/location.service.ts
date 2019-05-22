import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({ 
  providedIn: 'root'
})
export class LocationService {


  constructor(private http: HttpClient) { }

  public getLatLong(city){
    return this.http.jsonp('http://www.datasciencetoolkit.org/maps/api/geocode/json?sensor=false&address='+city, 'callback');
  }

}
