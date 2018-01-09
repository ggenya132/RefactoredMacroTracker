import { Injectable } from '@angular/core'
import {HttpClient} from '@angular/common/http';
import * as fireBase from 'firebase';
import {DayFinishedEvent} from '../models/dayFinishedEvent.model';
import {AuthService} from '../auth.service';

@Injectable()
export class DailyTotalsService {

  dailyTotals = {};
  endPoint = 'https://ngmacrotrackerrefactored.firebaseio.com/'
  currentUser = '';
  node = '/dailytotals.json?auth='
  constructor(private httpClient: HttpClient, private authService: AuthService) {

  }

  getDailyTotals() {
    this.currentUser = fireBase.auth().currentUser.uid + '/';
    const finalEndPoint = this.endPoint + this.currentUser + this.node + this.authService.getToken();
    console.log(finalEndPoint)
     this.httpClient.get<DayFinishedEvent[]>(finalEndPoint).subscribe((res) => {this.dailyTotals = res
     console.log(res); });
    return this.dailyTotals;
  }

}
