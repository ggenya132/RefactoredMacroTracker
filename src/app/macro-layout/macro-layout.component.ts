import {Component, Input, OnInit} from '@angular/core';
import {Adherance} from '../models/aherance.model';

@Component({
  selector: 'app-macro-layout',
  templateUrl: './macro-layout.component.html',
  styleUrls: ['./macro-layout.component.css']
})
export class MacroLayoutComponent implements OnInit {

  @Input()
  adherence: Adherance;
  constructor() { }

  ngOnInit() {
  }

}
