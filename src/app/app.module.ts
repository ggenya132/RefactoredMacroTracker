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
import {AuthService} from './auth.service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import {PublishService} from './services/publish.service';
import {DailyTotalsService} from './services/daily-totals.service';
import { DailyTotalComponent } from './daily-total/daily-total.component';
import { MacroLayoutComponent } from './macro-layout/macro-layout.component';
import {RoutingModule} from './routing/routing.module';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import {DropdownDirective} from './shared/dropdown.directive';
import { MealsComponent } from './meals/meals.component';
import { DailyMacrosComponent } from './daily-macros/daily-macros.component';



const routes: Routes = [
  {path: 'dailyMacros', component: DailyMacrosComponent},
  {path: 'signIn', component: SignInComponent},
  {path: 'signUp', component: SignUpComponent},
  {path: 'dailyTotalsHistory', component: DailyTotalComponent},
  { path: '',   redirectTo: '/signIn', pathMatch: 'full' },
  {path: '**', component: SignInComponent}];

@NgModule({
  declarations: [
    DropdownDirective,
    AppComponent,
    MealEntryComponent,
    MacroEntryComponent,
    TrainingProtocolEntryComponent,
    MealComponent,
    SignUpComponent,
    SignInComponent,
    DailyTotalComponent,
    MacroLayoutComponent,
    HeaderComponent,
    MealsComponent,
    DailyMacrosComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MealService, MacroService, HistoryService, AuthService, PublishService, DailyTotalsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
