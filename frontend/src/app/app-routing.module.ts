import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {ShowNewsComponent} from "./pages/show-news/show-news.component";
import {NewsPageComponent} from "./pages/news-page/news-page.component";
import {DocumentsPageComponent} from "./pages/documents-page/documents-page.component";

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'articles/:id',
    component: ShowNewsComponent
  },
  {
    path: 'etudes',
    component: DocumentsPageComponent
  },
  {
    path: 'rapports',
    component: DocumentsPageComponent
  },
  {
    path: 'actualite',
    component: NewsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
