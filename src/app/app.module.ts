import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { CComponent } from './c/c.component';
import { SIPCalculatorComponent } from './sipcalculator/sipcalculator.component';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CalculatorsComponent } from './calculators/calculators.component';
import { BMRCalculatorComponent } from './bmr-calculator/bmr-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    AComponent,
    BComponent,
    CComponent,
    SIPCalculatorComponent,
    HeaderComponent,
    PageNotFoundComponent,
    CalculatorsComponent,
    BMRCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
