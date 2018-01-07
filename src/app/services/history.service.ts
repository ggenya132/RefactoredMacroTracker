import { Injectable } from '@angular/core';
import {LoggedEvent} from '../models/loggingEvent.model';
import {Meal} from '../models/meal.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class HistoryService {

  history: LoggedEvent[] = [];
  constructor() { }

  eventLogged = new Subject<LoggedEvent[]>();
  logEvent(meal: Meal) {
    this.history.push(new LoggedEvent(new Date(), meal));
    this.eventLogged.next(this.history);
  }

  getHistory() {
    return this.history.slice();
  }
}
