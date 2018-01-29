import { Component, OnInit } from '@angular/core';
import {DailyTotalsService} from '../services/daily-totals.service';
import {Adherance} from '../models/aherance.model';
import {MacroSet} from '../models/macroSet.model';
import {MacroService} from '../services/macro.service';
import {TrainingProtocol} from '../models/trainingProtocol.model';

@Component({
  selector: 'app-daily-macros',
  templateUrl: './daily-macros.component.html',
  styleUrls: ['./daily-macros.component.css']
})
export class DailyMacrosComponent implements OnInit {

  macrosSet = false;
  traingingProtocol: TrainingProtocol;

  constructor(private macroService: MacroService) { }

  getAreMacrosInitallySet() {
    return this.macroService.macrosInitiallySet;
  }

  ngOnInit() {

    this.macroService.macrosSet.subscribe((response: TrainingProtocol) => {
      this.traingingProtocol = response;
      console.log(this.traingingProtocol);
      this.macrosSet = true;
    });
  }
}
