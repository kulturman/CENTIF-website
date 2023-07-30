import {Component, OnInit} from '@angular/core';
import {Articles, HomePageService, HomeText, Slider} from "./home-page.service";
import {forkJoin} from "rxjs";
import {formatDate} from "@angular/common";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  usefulLinks: {
    img: string,
    link: string,
    text: string,
    hideSecondLink?: boolean,
    internalUrl?: boolean
  }[] = [
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
      link: '/static/autorite-supervision',
      text: 'AUTORITE DE SUPERVISION ET DE CONTROLE',
      internalUrl: true,
      hideSecondLink: true
    },
    {
      img: 'assets/images/usefulLinks/onu.jpeg',
      link: 'https://www.un.org/securitycouncil/fr/content/un-sc-consolidated-list',
      text: 'LISTES SFC DES NATIONS UNIES'
    },
  ]
  articles!: Articles;
  slider!: Slider;
  homeText!: HomeText;
  constructor(private homeService: HomePageService) {
  }

  ngOnInit(): void {
    forkJoin([
      this.homeService.getHomeData(),
      this.homeService.getLastArticles(),
      this.homeService.getSliderImages()
    ]).subscribe(([homeData, articles, slider]) => {
      this.homeText = homeData;
      this.articles = articles;
      this.slider = slider;
    })
  }
  protected readonly environment = environment;
}
