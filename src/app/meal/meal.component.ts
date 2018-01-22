import {Component, Input, OnInit} from '@angular/core';
import {Meal} from '../models/meal.model';
import {MacroService} from '../services/macro.service';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {

  @Input() meal: Meal;
  constructor(private macroService: MacroService) { }

  ngOnInit() {
  }

  onClick() {

    this.macroService.logMeal(this.meal, 'trainingMacros');
  }
}
