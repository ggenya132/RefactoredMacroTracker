import {MacroSet} from './macroSet.model';

export class TrainingProtocol {
  constructor(public restingMacros: MacroSet, public trainingMacros: MacroSet) {}
}
