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
import {SubHeaderComponent} from "./components/sub-header/sub-header.component";
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { BackdropComponent } from './components/backdrop/backdrop.component';
import {DocumentsPageComponent} from "./pages/documents-page/documents-page.component";

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
    DocumentsPageComponent,
    SubHeaderComponent,
    SubHeaderComponent,
    NewsPageComponent,
    SpinnerComponent,
    BackdropComponent,
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
