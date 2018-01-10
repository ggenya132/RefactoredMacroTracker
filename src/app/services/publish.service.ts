import { Injectable } from '@angular/core';
import {MacroService} from './macro.service';
import {Adherance} from '../models/aherance.model';
import {MacroSet} from '../models/macroSet.model';
import {DayFinishedEvent} from '../models/dayFinishedEvent.model';
import {HistoryService} from './history.service';
import * as firebase from 'firebase';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../auth.service';

@Injectable()
export class PublishService {
  fireBaseUrl = 'https://ngmacrotrackerrefactored.firebaseio.com/';
  fireBaseUrlDialyTotralsQuery = '/dailytotals/';
    query= '.json?auth=';

  constructor(private macroService: MacroService,
              private historyService: HistoryService,
              private httpClient: HttpClient,
              private authService: AuthService) { }

  getAdherance(): Adherance {
    const dailyProtocol = this.macroService.dailyProtocol;
    const activeMacros = this.macroService.trainingProtocol[dailyProtocol];
    const immutableMacros: MacroSet = this.macroService.immutableProtocol[dailyProtocol];
    const proteinLogged = immutableMacros.protein - activeMacros.protein;
    const carbsLogged = immutableMacros.protein - activeMacros.protein;
    const fatLogged  = immutableMacros.protein - activeMacros.protein;
    return new Adherance(carbsLogged / immutableMacros.carbohydrates,
      fatLogged / immutableMacros.fat,
      proteinLogged / immutableMacros.protein);

  }

  getMacrosLogged(): MacroSet {
    const dailyProtocol = this.macroService.dailyProtocol;
    const activeMacros = this.macroService.trainingProtocol[dailyProtocol];
    const immutableMacros: MacroSet = this.macroService.immutableProtocol[dailyProtocol];
    const proteinLogged = immutableMacros.protein - activeMacros.protein;
    const carbsLogged = immutableMacros.protein - activeMacros.protein;
    const fatLogged  = immutableMacros.protein - activeMacros.protein;
    return new MacroSet(carbsLogged, fatLogged, proteinLogged);
  }

  publishDailyTotal() {

    const tzoffset = (new Date()).getTimezoneOffset() * 60000;
    const localISOTime = (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1).substring(0, 10);
    const date = new Date().toISOString().substring(0, 10);
    const date2 = new Date();
    console.log(localISOTime);

    console.log(date)
    const DailyTotals = new DayFinishedEvent( new Date, this.macroService.immutableProtocol,
      this.getMacrosLogged(), this.getAdherance(), this.historyService.getHistory());
    console.log(DailyTotals)
    this.httpClient.put(this.fireBaseUrl + firebase.auth().currentUser.uid +
      this.fireBaseUrlDialyTotralsQuery + localISOTime + this.query + this.authService.getToken(), DailyTotals).subscribe(res => console.log(res));
  }



}
