import {Injectable} from '@angular/core';
import {TrainingProtocol} from '../models/trainingProtocol.model';
import {Meal} from '../models/meal.model';
import {Subject} from 'rxjs/Subject';
import {MacroSet} from '../models/macroSet.model';
import {HistoryService} from './history.service';
import {HttpClient} from "@angular/common/http";
import {MealService} from "./meal.service";
import {AuthService} from '../auth.service';
import * as firebase from 'firebase';

@Injectable()
export class MacroService {
  macrosInitiallySet = false;
  fireBaseUrl = 'https://ngmacrotrackerrefactored.firebaseio.com/'
  fireBaseUrlMealsQuery = '/meals.json?auth='
  mealLogged = new Subject<MacroSet>();
  macrosSet = new Subject<TrainingProtocol>();
  immutableProtocol: TrainingProtocol = new TrainingProtocol(new MacroSet(0, 0, 0), new MacroSet(0, 0, 0));
  trainingProtocol: TrainingProtocol = new TrainingProtocol(new MacroSet(0, 0, 0), new MacroSet(0, 0, 0));
  dailyProtocol: string;



  constructor(private history: HistoryService, private http: HttpClient, private mealService: MealService,
              private authService: AuthService) {}

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
    console.log('setting macros');
    this.immutableProtocol[macroProtocol] = macroSet;
    this.trainingProtocol[macroProtocol] = macroSet;
    this.dailyProtocol = macroProtocol;
    this.macrosSet.next(this.trainingProtocol);
    this.macrosInitiallySet = true;
  }


  getMacros() {
    const macroCopy = this.trainingProtocol;
    return macroCopy;
  }

  putMeals() {

    const user = firebase.auth().currentUser.uid;
    this.http.put(this.fireBaseUrl  + user + this.fireBaseUrlMealsQuery  +
      this.authService.getToken(), this.mealService.getMeals()).subscribe();
  }


  getMeals() {
    console.log(firebase.auth().currentUser == null);

    console.log(firebase.auth().currentUser.uid);
    const user = firebase.auth().currentUser.uid;

   return this.http.get<Meal[]>(this.fireBaseUrl + user + this.fireBaseUrlMealsQuery  +
   this.authService.getToken());
  }


}
