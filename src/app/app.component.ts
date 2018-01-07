import { Component } from '@angular/core';
import {Meal} from './models/meal.model';
import {MealService} from './services/meal.service';
import {MacroService} from './services/macro.service';
import {TrainingProtocol} from './models/trainingProtocol.model';
import {MacroSet} from './models/macroSet.model';
import {LoggedEvent} from './models/loggingEvent.model';
import {HistoryService} from './services/history.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  history: LoggedEvent[] = [];
  meals: Meal[] = [];
  trainingMacros: TrainingProtocol = new TrainingProtocol(new MacroSet(0, 0 , 0), new MacroSet(0, 0 , 0));
  title = 'app';

  constructor(private mealService: MealService, private macroSerivce: MacroService, private historyService: HistoryService) {
    this.history = this.historyService.getHistory();
    this.trainingMacros = this.macroSerivce.getMacros();
    this.meals = this.mealService.getMeals();
    this.macroSerivce.macrosSet.subscribe((macros: TrainingProtocol) => {
      console.log(macros);
      this.trainingMacros = macros;
    })
    this.historyService.eventLogged.subscribe((history: LoggedEvent[]) => {
      this.history = history;
    })
    this.mealService.mealAdded.subscribe((meals: Meal[]) => {
      this.meals = meals;
      console.log(this.meals);
    } );

    console.log(this.trainingMacros);
  }

    onSave() {
    this.macroSerivce.putMeals();
    }

    onLoad() {
    this.macroSerivce.getMeals().subscribe((meals) => {
      this.mealService.setMeals(meals);
    });
    }
}
