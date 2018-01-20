import {Component, Input, OnInit} from '@angular/core';
import {DayFinishedEvent} from '../models/dayFinishedEvent.model';
import {DailyTotalsService} from '../services/daily-totals.service';

@Component({
  selector: 'app-daily-total',
  templateUrl: './daily-total.component.html',
  styleUrls: ['./daily-total.component.css']
})
export class DailyTotalComponent implements OnInit {

  showMeals: boolean;
  // @Input()
  // dailyTotal: DayFinishedEvent;


  dailyTotal: DayFinishedEvent;

  constructor(private dailyTotalsService: DailyTotalsService ) { }

  ngOnInit() {
  }

  onShowMeals() {
    this.showMeals = !this.showMeals;
  }

  toDateString() {
    return new Date(this.dailyTotal.date).toDateString();
  }

  toTimeString() {
    const date = new Date(this.dailyTotal.date);
    let hr = date.getHours();
    const min = date.getMinutes();
    console.log(hr)
    if (hr > 12) {
      hr -= 12;
    return  hr.toString() + ':' + min + ' PM';
    }

    return  hr.toString() + ':' + min + ' AM';

  }

  onSearchDate(date: string) {
    console.log(this.dailyTotalsService.getDailyTotals()[date]);
    this.dailyTotal = this.dailyTotalsService.getDailyTotals()[date];
    console.log(this.dailyTotal);
  }



}
