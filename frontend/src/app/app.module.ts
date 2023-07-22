import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { MobileMenuComponent } from './components/mobile-menu/mobile-menu.component';
import { CarousselComponent } from './components/caroussel/caroussel.component';
import {HttpClientModule} from "@angular/common/http";
import { ShowNewsComponent } from './pages/show-news/show-news.component';
import {registerLocaleData} from "@angular/common";
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr, 'fr');
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainMenuComponent,
    HomePageComponent,
    FooterComponent,
    MobileMenuComponent,
    CarousselComponent,
    ShowNewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
