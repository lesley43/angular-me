import { Component, OnInit } from '@angular/core';

import { Property } from '../property';
import { PropertyService } from '../property.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss']
})
export class BuyComponent implements OnInit {

  readonly properties$: this.propertyService.properties$;

  selectedProperty: Property;

  

  // throw away example
  clickCounter = 0;

  constructor(private propertyService: PropertyService) { }

  ngOnInit() {
   
  }

  onSelect(property: Property): void {
    this.selectedProperty = property;
  }


  // example code to be adjusted or deleted later
  countClick() {
    this.clickCounter += 1;
  }
  
  setClasses() {
    const myClasses = {
      active: this.clickCounter > 4,
      notActive: this.clickCounter <= 4,
    }
    return myClasses;
  }
}
