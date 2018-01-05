import { Injectable } from '@angular/core';
import {TrainingProtocol} from './models/trainingProtocol.model';
import {Meal} from './models/meal.model';
import {Subject} from 'rxjs/Subject';
import {MacroSet} from './models/macroSet.model';
import {HistoryService} from './history.service';

@Injectable()
export class MacroService {

  mealLogged = new Subject<MacroSet>();
  macrosSet = new Subject<TrainingProtocol>();
  trainingProtocol: TrainingProtocol = new TrainingProtocol(new MacroSet(0, 0, 0), new MacroSet(0, 0, 0));

  constructor(private history: HistoryService) { }

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



}
