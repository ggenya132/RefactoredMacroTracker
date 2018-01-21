import { Injectable } from '@angular/core'
import {HttpClient} from '@angular/common/http';
import * as fireBase from 'firebase';
import {DayFinishedEvent} from '../models/dayFinishedEvent.model';
import {AuthService} from '../auth.service';

@Injectable()
export class DailyTotalsService {

  dailyTotals = {};
  dailyTotalsArray: DayFinishedEvent[];
  endPoint = 'https://ngmacrotrackerrefactored.firebaseio.com/'
  currentUser = '';
  node = '/dailytotals.json?auth='
  constructor(private httpClient: HttpClient, private authService: AuthService) {

  }
 // *to do: make this component make this call when the user loads data*
  getDailyTotals() {
    this.currentUser = fireBase.auth().currentUser.uid + '/';
    const finalEndPoint = this.endPoint + this.currentUser + this.node + this.authService.getToken();
    console.log(finalEndPoint)
     this.httpClient.get<DayFinishedEvent[]>(finalEndPoint).subscribe((res: DayFinishedEvent[]) => {this.dailyTotalsArray = res;
       console.log(res);
       this.dailyTotals = res;
       console.log(this.dailyTotalsArray); });
    return this.dailyTotals;
     }
  }


