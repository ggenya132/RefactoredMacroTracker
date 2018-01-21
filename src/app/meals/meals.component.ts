import { Component, OnInit } from '@angular/core';
import {MealService} from '../services/meal.service';
import {Meal} from '../models/meal.model';
import {MacroService} from '../services/macro.service';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit {
  constructor(private macroService: MacroService) {
  }

  meals: Meal[] = [];
  constructor(private mealService: MealService) { }

  ngOnInit() {
    this.macroService.getMeals().subscribe((meals: Meal[]) => {
      this.mealService.setMeals(meals);
    });
    this.meals = this.mealService.getMeals();
    console.log(this.meals);
  }

}
