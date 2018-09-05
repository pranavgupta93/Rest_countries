import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class AppService {

  public getAllCountries=(region:string)=>{
    let response=this._http.get("https://restcountries.eu/rest/v2/region/"+region);
    return response;
  }
  public getSingleCountry=(name)=>{
    let response=this._http.get(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`);
    return response;
  }
  public getCountriesByCurrency=(currency)=>{
    let response=this._http.get(`https://restcountries.eu/rest/v2/currency/${currency}`);
    return response;
  }
  constructor(private _http:HttpClient) { }

}
