import {Component, OnInit} from '@angular/core';
import {Articles, HomePageService, HomeText} from "./home-page.service";
import {forkJoin} from "rxjs";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  usefulLinks = [
    {
      img: 'assets/images/usefulLinks/gafi.jpeg',
      link: 'https://www.fatf-gafi.org/',
      text: 'GAFI'
    },
    {
      img: 'assets/images/usefulLinks/giaba.jpeg',
      link: 'https://giaba.org',
      text: 'GIABA'
    },
    {
      img: 'assets/images/usefulLinks/onu.jpeg',
      link: 'https://www.unodc.org/unodc/fr/',
      text: 'ONUDC'
    },
    {
      img: 'assets/images/logo.jpeg',
      link: '',
      text: 'DECLARATION EN LIGNE'
    },
    {
      img: 'assets/images/usefulLinks/supervision.jpeg',
      link: '',
      text: 'AUTORITE DE SUPERVISION ET DE CONTROLE'
    },
    {
      img: 'assets/images/usefulLinks/onu.jpeg',
      link: 'https://www.un.org/securitycouncil/fr/content/un-sc-consolidated-list',
      text: 'LISTES SFC DES NATIONS UNIES'
    },
  ]
  articles!: Articles;

  homeText!: HomeText;
  constructor(private homeService: HomePageService) {
  }

  ngOnInit(): void {
    forkJoin([
      this.homeService.getHomeData(),
      this.homeService.getLastArticles(),
    ]).subscribe(([homeData, articles]) => {
      this.homeText = homeData;
      this.articles = articles;
      console.log(articles)
    })
  }

  protected readonly formatDate = formatDate;
}
