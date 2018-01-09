import { Injectable } from '@angular/core'
import {HttpClient} from '@angular/common/http';
import * as fireBase from 'firebase';
import {DayFinishedEvent} from '../models/dayFinishedEvent.model';
import {AuthService} from '../auth.service';

@Injectable()
export class DailyTotalsService {

  endPoint = 'https://ngmacrotrackerrefactored.firebaseio.com/'
  currentUser = '';
  node = 'dailytotals.json?auth='
  constructor(private httpClient: HttpClient, private authService: AuthService) {
    this.currentUser = fireBase.auth().currentUser.uid;
  }

  getDailyTotals() {
    const finalEndPoint = this.endPoint + this.currentUser + this.node + this.authService.getToken();
    return this.httpClient.get<DayFinishedEvent[]>(finalEndPoint);
  }

}
