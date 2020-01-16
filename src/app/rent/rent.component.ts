import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.scss']
})
export class RentComponent implements OnInit {

  rentals: Object;

  constructor(private _http: HttpService) { }

  // this runs when component is loaded
  ngOnInit() {
    this._http.getRentals().subscribe(data => {
      this.rentals = data;
      console.log(this.rentals);
      
    });
  }

}
