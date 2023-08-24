import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  cities = [
    { label: 'District of Columbia Forecast', value: 'LWX'},
    { label: 'Kansas Forecast', value: 'TOP'}
  ];

}
