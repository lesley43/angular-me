import { Component, OnInit } from '@angular/core';

import { Property } from '../property';
import { PropertyService } from '../property.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss']
})
export class BuyComponent implements OnInit {

  selectedProperty: Property;

  properties: Property[];

  constructor(private propertyService: PropertyService) { }

  ngOnInit() {
    this.getProperties();    
  }

  onSelect(property: Property): void {
    this.selectedProperty = property;
  }

  getProperties(): void {
    this.propertyService.getProperties()
        .subscribe(properties => this.properties = properties);
  }



    // example code to be adjusted or deleted later
    countClick() {
      this.clickCounter += 1;
    }
  
    setClasses() {
      let myClasses = {
        active: this.clickCounter > 4,
        notActive: this.clickCounter <= 4,
      }
      return myClasses;
    }
}