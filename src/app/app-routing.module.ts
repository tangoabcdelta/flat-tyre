import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SIPCalculatorComponent } from './sipcalculator/sipcalculator.component';
import { BComponent } from './b/b.component';
import { CalculatorsComponent } from './calculators/calculators.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BMRCalculatorComponent } from './bmr-calculator/bmr-calculator.component';
import { WalkingCalorieCalculatorComponent } from './walking-calorie-calculator/walking-calorie-calculator.component';


const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    pathMatch: 'full'
  },
  {
    path: 'calculators',
    children: [
      {
        path: 'sip',
        pathMatch: 'full',
        component: SIPCalculatorComponent 
      },
      {
        path: 'bmr',
        pathMatch: 'full',
        component: BMRCalculatorComponent 
      },
      {
        path: 'walking-calorie-calculator',
        pathMatch: 'full',
        component: WalkingCalorieCalculatorComponent 
      }
    ]
    
  },
  {
    path: 'something-else',
    component: BComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
