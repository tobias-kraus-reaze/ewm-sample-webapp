import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { EventModel } from '../../models/event.model';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  events: Array<EventModel>;
  constructor(private eventsService: EventsService) { }

  ngOnInit(): void {
    this.eventsService.getEventListing().subscribe((events: Array<EventModel>) => {
      this.events = events;
    });
  }

}
