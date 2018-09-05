import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  public regions=[{name:'europe',url:'../../assets/europe.jpg'},
  {name:'asia',url:'../../assets/asia.jpg'},
  {name:'africa',url:'../../assets/africa.jpg'},
  {name:'americas',url:'../../assets/america.jpg'},
  {name:'oceania',url:'../../assets/oceania.png'}];
  ngOnInit() {

    
  }

}
