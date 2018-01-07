import {Injectable} from '@angular/core';
import {TrainingProtocol} from '../models/trainingProtocol.model';
import {Meal} from '../models/meal.model';
import {Subject} from 'rxjs/Subject';
import {MacroSet} from '../models/macroSet.model';
import {HistoryService} from './history.service';
import {HttpClient} from "@angular/common/http";
import {MealService} from "./meal.service";

@Injectable()
export class MacroService {

  fireBaseUrl = 'https://ngmacrotrackerrefactored.firebaseio.com/meals.json';
  mealLogged = new Subject<MacroSet>();
  macrosSet = new Subject<TrainingProtocol>();
  trainingProtocol: TrainingProtocol = new TrainingProtocol(new MacroSet(0, 0, 0), new MacroSet(0, 0, 0));

  constructor(private history: HistoryService, private http: HttpClient, private mealService: MealService) {
  }

  logMeal(meal: Meal, protocol: string) {
    const currentMacros: MacroSet = this.trainingProtocol[protocol];
    const macrosAfterDeduction = new MacroSet(currentMacros.carbohydrates - meal.macros.carbohydrates,
      currentMacros.fat - meal.macros.fat,
      currentMacros.protein - meal.macros.protein);
    console.log(macrosAfterDeduction);
    this.trainingProtocol[protocol] = macrosAfterDeduction;
    this.mealLogged.next(this.trainingProtocol[protocol]);
    this.history.logEvent(meal);
  }

  onSetMacros(macroSet: MacroSet, macroProtocol: string) {
    console.log("setting macros");
    this.trainingProtocol[macroProtocol] = macroSet;
    this.macrosSet.next(this.trainingProtocol);
  }


  getMacros() {
    const macroCopy = this.trainingProtocol;
    return macroCopy;
  }

  putMeals() {
    this.http.put(this.fireBaseUrl, this.mealService.getMeals()).subscribe();
  }


  getMeals() {
   return this.http.get<Meal[]>(this.fireBaseUrl);
  }


}
