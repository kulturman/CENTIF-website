import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {ShowNewsComponent} from "./pages/show-news/show-news.component";
import {NewsPageComponent} from "./pages/news-page/news-page.component";
import {DocumentsPageComponent} from "./pages/documents-page/documents-page.component";
import {StaticPageComponent} from "./pages/static-page/static-page.component";

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
    path: 'textes-nationaux',
    component: DocumentsPageComponent
  },
  {
    path: 'textes-internationaux',
    component: DocumentsPageComponent
  },
  {
    path: 'textes-regionaux',
    component: DocumentsPageComponent
  },
  {
    path: 'rapports',
    component: DocumentsPageComponent
  },
  {
    path: 'actualite',
    component: NewsPageComponent
  },
  {
    path: 'static',
    children: [
      {
        path: '**',
        component: StaticPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
