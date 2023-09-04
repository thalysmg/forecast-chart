import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

import { DropdownModule } from 'primeng/dropdown';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';

import { RouterModule } from '@angular/router';
import { ForecastComponent } from './pages/forecast/forecast.component';
import { MenubarModule } from 'primeng/menubar';

import { HttpClientModule } from '@angular/common/http';

import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ForecastComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DropdownModule,
    ButtonModule,
    RouterModule,
    HttpClientModule,
    PanelModule,
    MenubarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
