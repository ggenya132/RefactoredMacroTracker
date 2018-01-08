import {MacroSet} from './macroSet.model';
import {Adherance} from './aherance.model';
import {TrainingProtocol} from './trainingProtocol.model';
import {LoggedEvent} from './loggingEvent.model';

export class DayFinishedEvent {
  constructor(public date: Date, public trainingProtocol: TrainingProtocol,
              public macrosLogged: MacroSet, public dailyAdherance: Adherance,
              public dailyMealLog: LoggedEvent[]) {}
}

