import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {MacroService} from '../services/macro.service';
import {MacroSet} from '../models/macroSet.model';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'app-macro-entry',
  templateUrl: './macro-entry.component.html',
  styleUrls: ['./macro-entry.component.css']
})
export class MacroEntryComponent implements OnInit {

  constructor(private macroService: MacroService) { }

  ngOnInit() {
  }

  onSetMacros(form: NgForm) {

   const macroProtocol =  form.value.macroProtocol;
    const carbs = form.value.carbs;
    const fat = form.value.protein;
    const protein = form.value.protein;
    const macroSet = new MacroSet(carbs, fat, protein);
    this.macroService.onSetMacros(macroSet, macroProtocol);

  }

}
