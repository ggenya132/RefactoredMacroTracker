import {Component, OnInit} from '@angular/core';
import {Meal} from './models/meal.model';
import {MealService} from './services/meal.service';
import {MacroService} from './services/macro.service';
import {TrainingProtocol} from './models/trainingProtocol.model';
import {MacroSet} from './models/macroSet.model';
import {LoggedEvent} from './models/loggingEvent.model';
import {HistoryService} from './services/history.service';
import * as fireBase from 'firebase';
import {PublishService} from './services/publish.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  history: LoggedEvent[] = [];
  meals: Meal[] = [];
  trainingMacros: TrainingProtocol = new TrainingProtocol(new MacroSet(0, 0 , 0), new MacroSet(0, 0 , 0));

  constructor(private mealService: MealService, private macroSerivce: MacroService,
              private historyService: HistoryService,
              private publishService: PublishService) {
    this.history = this.historyService.getHistory();
    this.trainingMacros = this.macroSerivce.getMacros();
    this.meals = this.mealService.getMeals();
    this.macroSerivce.macrosSet.subscribe((macros: TrainingProtocol) => {
      console.log(macros);
      this.trainingMacros = macros;
    });
    this.historyService.eventLogged.subscribe((history: LoggedEvent[]) => {
      this.history = history;
    });
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
    this.macroSerivce.getMeals().subscribe((meals: Meal[]) => {
      this.mealService.setMeals(meals);
    });
    }
    ngOnInit() {
    fireBase.initializeApp( {
        apiKey: 'AIzaSyAxGMT6yMozo5l7QzpcZZP1yoJdivt1kjE',
        authDomain: 'ngmacrotrackerrefactored.firebaseapp.com'
      });
    }

  onPublish() {
    this.publishService.publishDailyTotal();
  }
}
