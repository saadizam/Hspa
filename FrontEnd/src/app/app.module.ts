import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {PropertyCardClassComponent} from './Property/PropertyCard/Property-Card.Component';
import { PropertyListComponent } from './Property/property-list/property-list.component'
import { NavBarComponent } from './nav-bar/nav-bar.component';
@NgModule({
  declarations: [
    AppComponent,
    PropertyCardClassComponent,
    PropertyListComponent,
    NavBarComponent
],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
