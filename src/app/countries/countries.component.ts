import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { AppService } from '../app.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
  providers:[Location]
})
export class CountriesComponent implements OnInit {
  public countries=[];
  constructor(private _route:ActivatedRoute,private appservice:AppService,private location:Location) { }
  private region=this._route.snapshot.queryParamMap.get("region");
  private currency=this._route.snapshot.queryParamMap.get("currency");
  ngOnInit() {
    this._route.queryParams.subscribe(res=>{
      this.currency=res['currency'];
      this.countries=[];
      if(this.currency)
      this.currencyFilterCountries(this.currency);
    })
    console.log(this.region + ' '+this.currency)
    this.countries=[];
    if(this.region)
    this.getAllCountries(this.region);
    // if(this.currency)
    // this.currencyFilterCountries(this.currency);
  }
  private getAllCountries=(region)=>{
    this.appservice.getAllCountries(region).subscribe(
      response=>{
        this.countries=this.countries.concat(response);
        console.log(this.countries);
      }
    );
  }

  private currencyFilterCountries=(currency)=>{
    this.appservice.getCountriesByCurrency(currency).subscribe(
      response=>{
        this.countries=this.countries.concat(response);
        console.log(this.countries);
      }
    );
  }
  goBack=()=>{
    this.location.back();
  }
}
