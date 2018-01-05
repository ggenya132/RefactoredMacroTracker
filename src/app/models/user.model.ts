import {Meal} from './meal.model';
import {TrainingProtocol} from './trainingProtocol.model';

export class User {
  constructor(public meals: Meal[], public trainingProtocol: TrainingProtocol) {}
}
