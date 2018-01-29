import {Component, OnInit} from '@angular/core';
import {MacroSet} from '../models/macroSet.model';
import {TrainingProtocol} from '../models/trainingProtocol.model';
import {MacroService} from '../services/macro.service';

@Component({
  selector: 'app-macro-chart',
  templateUrl: './macro-chart.component.html',
  styleUrls: ['./macro-chart.component.css']
})
export class MacroChartComponent implements OnInit {

  macroSet: MacroSet;

  protein = 0;
  carbs = 0;
  fats = 0;
  data = [this.protein, this.carbs, this.fats];
  chartData = [{ data: this.data, label: 'Remaining Macros' }
  ];

  chartLabels = ['Protein', 'Carbohydrates', 'Fat'];

  chartOptions = {
    responsive: true
  };


  onChartClick(event) {
    console.log(event);
  }
  constructor(private macroService: MacroService) { console.log(this.macroSet);
  }

  assignMacros(macroSet: MacroSet) {
    this.protein = this.macroSet.protein;
    this.fats = this.macroSet.fat;
    this.carbs = this.macroSet.carbohydrates;
    this.data = [this.protein, this.carbs, this.fats];
    this.chartData = [{ data: this.data, label: 'Remaining Macros' }];
  }

  ngOnInit() {
    console.log('hello macros chart')
    this.macroSet = this.macroService.getMacros().trainingMacros;
    this.assignMacros(this.macroSet);
    this.macroService.macrosSet.subscribe((response: TrainingProtocol) => {
      this.macroSet = response.trainingMacros;
      this.assignMacros(this.macroSet);
      

    });
  }

}
