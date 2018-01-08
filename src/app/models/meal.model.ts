import {MacroSet} from './macroSet.model';

export class Meal {
  constructor(public name: string, public description: string, public macros: MacroSet) {}

  toString() {
   return this.name + this.description + this.macros.toString();
  }
}
