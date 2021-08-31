import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  webApiURl:string  = 'https://restcountries.eu/rest/v2/all';
  constructor(private http: HttpClient) { }
  //to get the countries
  getCountry(){
    return this.http.get(this.webApiURl)
  }
}
