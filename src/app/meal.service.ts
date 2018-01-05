import { Injectable } from '@angular/core';
import {Meal} from './models/meal.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class MealService {

  mealAdded = new  Subject<Meal[]>();
  meals: Meal[] = [];
  constructor() { }

  addMeal(meal: Meal) {
  this.meals.push(meal);
  this.mealAdded.next(this.meals);
  }

  getMeals() {
    return this.meals.slice();
  }



}
