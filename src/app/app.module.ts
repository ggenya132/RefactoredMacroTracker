import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MealEntryComponent } from './meal-entry/meal-entry.component';
import { MacroEntryComponent } from './macro-entry/macro-entry.component';
import { TrainingProtocolEntryComponent } from './training-protocol-entry/training-protocol-entry.component';
import {FormsModule} from '@angular/forms';
import { MealComponent } from './meal/meal.component';
import {MealService} from './services/meal.service';
import {MacroService} from './services/macro.service';
import {HistoryService} from './services/history.service';
import {HttpClientModule} from '@angular/common/http';




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
    FormsModule,
    HttpClientModule
  ],
  providers: [MealService, MacroService, HistoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
