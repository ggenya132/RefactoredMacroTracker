import {Meal} from './meal.model';

export class LoggedEvent {
  constructor(public timeMealWasLogged: Date, public meal: Meal) {}

  toString() {

    return 'Meal was logged at ' + this.timeMealWasLogged.toDateString() + ' with the following details:' + this.meal.toString();
  }
}
