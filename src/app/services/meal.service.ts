import {Injectable, OnInit} from '@angular/core';
import {Meal} from '../models/meal.model';
import {Subject} from 'rxjs/Subject';
import {MacroService} from './macro.service';

@Injectable()
export class MealService  {

  constructor() {
  }

  mealAdded = new  Subject<Meal[]>();
  meals: Meal[] = [];

  addMeal(meal: Meal) {
  this.meals.push(meal);
  this.mealAdded.next(this.meals);
  }

  getMeals() {
    return this.meals.slice();
  }

  setMeals(meals: Meal[]) {
    this.meals = meals;
    this.mealAdded.next(this.meals);
  }

  // ngOnInit() {
  //   this.macroService.getMeals().subscribe((res: Meal[]) => this.meals = res);
  // }



}
