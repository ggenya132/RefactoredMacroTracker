import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MealEntryComponent } from './meal-entry/meal-entry.component';
import { MacroEntryComponent } from './macro-entry/macro-entry.component';
import { TrainingProtocolEntryComponent } from './training-protocol-entry/training-protocol-entry.component';
import {FormsModule} from '@angular/forms';
import { MealComponent } from './meal/meal.component';
import {MealService} from './meal.service';
import {MacroService} from './macro.service';
import {HistoryService} from './history.service';




@NgModule({
  declarations: [
    AppComponent,
    MealEntryComponent,
    MacroEntryComponent,
    TrainingProtocolEntryComponent,
    MealComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MealService, MacroService, HistoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
