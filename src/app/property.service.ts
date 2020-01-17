import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

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

  /** learning rxjs is a really important part of having success with Angular.  
      Here I replaces your getProperties method with a simpler observable stream.
      Nothing will happen untill somebody subscribes. */
  readonly properties$ = of(Properties).pipe(
      tap(() => this.messageService.add('PropertyService: fetched properties'))
    );
  
  constructor(private messageService: MessageService) { }

}
