import {Component, OnInit} from '@angular/core';
import {Articles, HomePageService, HomeText, Slider, UsefulLink} from "./home-page.service";
import {forkJoin} from "rxjs";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  usefulLinks?: UsefulLink[];
  articles?: Articles;
  slider!: Slider;
  homeText?: HomeText;
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
      this.usefulLinks = this.homeService.getUsefulLinks();
    })
  }
  protected readonly environment = environment;
}
