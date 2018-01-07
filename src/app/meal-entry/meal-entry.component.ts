import { Component, OnInit } from '@angular/core';
import {Meal} from '../models/meal.model';
import {NgForm} from '@angular/forms';
import {MacroSet} from '../models/macroSet.model';
import {MealService} from '../services/meal.service';

@Component({
  selector: 'app-meal-entry',
  templateUrl: './meal-entry.component.html',
  styleUrls: ['./meal-entry.component.css']
})
export class MealEntryComponent implements OnInit {

  constructor(private mealService: MealService) {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {


    const name = form.value.name;
    const description = form.value.description
    const protein = form.value.protein;
    const carbs = form.value.carbs;
    const fat = form.value.fat;

    const macroSet = new MacroSet(carbs, fat, protein);
    console.log(macroSet);
    const newMeal = new Meal(name, description, new MacroSet(carbs, fat, protein));
    console.log(newMeal);

    this.mealService.addMeal(newMeal);


  }
}
