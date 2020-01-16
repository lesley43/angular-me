import { Component, OnInit } from '@angular/core';
import { Property } from '../property';
import { Properties } from '../mock-properties';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss']
})
export class BuyComponent implements OnInit {

  // define component property to expose Properties array for binding
  properties = Properties;

  // define selected property
  selectedProperty: Property;

  clickCounter: number = 0;
  name: string = '';

  constructor() { }

  ngOnInit() {
  }

  // assign clicked property from template to component's selectedProperty
  onSelect(property: Property) : void {
    this.selectedProperty = property;
  }

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
