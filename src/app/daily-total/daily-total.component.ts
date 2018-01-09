import {Component, Input, OnInit} from '@angular/core';
import {DayFinishedEvent} from '../models/dayFinishedEvent.model';

@Component({
  selector: 'app-daily-total',
  templateUrl: './daily-total.component.html',
  styleUrls: ['./daily-total.component.css']
})
export class DailyTotalComponent implements OnInit {

  showMeals: boolean;
  @Input()
  dailyTotal: DayFinishedEvent;

  constructor() { }

  ngOnInit() {
  }

  onShowMeals() {
    this.showMeals = !this.showMeals;
  }

}
