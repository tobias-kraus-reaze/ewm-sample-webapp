import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_EVENT_LISTING } from '../graphql/queries/events.queries';
import { catchError, map, Observable, throwError } from 'rxjs';
import { EventModel } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private apollo: Apollo) { }

  public getEventListing(): Observable<Array<EventModel>> {
    return this.apollo.query({
      query: GET_EVENT_LISTING,
      variables: {
        appId: 'experience',
        lang: 'de',
        numberOfEvents: 25
      }
    }).pipe(
      map((response: any) => response.data.getEventListing.edges.map(eventEdge => eventEdge.node)),
      catchError((error: any) => throwError(error.message))
    );
  }

}
