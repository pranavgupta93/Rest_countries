import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css'],
  providers:[Location]
})
export class CountryDetailsComponent implements OnInit {
  private name=this.route.snapshot.queryParamMap.get("name");
  constructor(private route:ActivatedRoute,private appservice:AppService,private location:Location) { }
  public countrydata;
  ngOnInit() {
    this.getCountryDetails(this.name);
  }
  private getCountryDetails=(name)=>{
    this.appservice.getSingleCountry(name).subscribe(
      (response)=>{
        this.countrydata=response[0];
        console.log(this.countrydata);
      },
      (error)=>{
        console.log(error);
      }
    );
  }
  goBack=()=>{
    this.location.back();
  }
}
