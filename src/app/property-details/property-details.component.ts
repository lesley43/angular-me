import { Component, OnInit, Input } from '@angular/core';
import { Property } from '../property';


@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.scss']
})
export class PropertyDetailsComponent implements OnInit {

  // input property -- external buy.component binds to this
  @Input() property: Property;

  constructor() { }

  ngOnInit() {
  }

}
