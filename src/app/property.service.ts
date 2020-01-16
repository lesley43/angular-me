import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Property } from './property';
import { Properties } from './mock-properties';
import { MessageService } from './message.service';

/* This service provides an injectable service
    accepts a metadata object for the service
    can get data from anywhere (web service, local storage, mock data)
*/

// register service with injector - responsible for choosing & injecting provider where app requires
// Here, we are providing service at root level - Angular injects into any class that asks for it
@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private messageService: MessageService) { }

  // HttpClient methods return RxJS observables
  getProperties() : Observable<Property[]> {
    // TODO: send message after fetching properties
    this.messageService.add('PropertyService: fetched properties');

    // of(Properties) returns an Observable<Property[]> that emits a single value (the array of mock properties)
    // will eventually return an array of properties from body of HTTP response
    return of(Properties);
  }
}