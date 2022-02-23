import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlideShowComponent } from './components/slide-show/slide-show.component';
import { HeaderComponent } from './components/header/header.component';
import { SideNavigationComponent } from './components/side-navigation/side-navigation.component';
import { MenuNavigationComponent } from './components/menu-navigation/menu-navigation.component';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeadlineComponent } from './components/headline/headline.component';
import { ObjectDescpComponent } from './components/object-descp/object-descp.component';
import { MapComponent } from './components/map/map.component';
import { BackBtnComponent } from './components/back-btn/back-btn.component';
import { DateComponent } from './components/date/date.component';
import { TimeComponent } from './components/time/time.component';
import { WeatherComponent } from './components/weather/weather.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { ThemeBtnComponent } from './components/theme-btn/theme-btn.component';
import { DisabledModeComponent } from './components/disabled-mode/disabled-mode.component';

@NgModule({
  declarations: [
    AppComponent,
    SlideShowComponent,
    HeaderComponent,
    SideNavigationComponent,
    MenuNavigationComponent,
    HomeComponent,
    HeadlineComponent,
    ObjectDescpComponent,
    MapComponent,
    BackBtnComponent,
    DateComponent,
    TimeComponent,
    WeatherComponent,
    LanguagesComponent,
    ThemeBtnComponent,
    DisabledModeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
