import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Article, ShowArticleService} from "./show-article.service";
import {environment} from "../../../environments/environment";
import {Articles} from "../home-page/home-page.service";

@Component({
  selector: 'app-show-news',
  templateUrl: './show-news.component.html',
  styleUrls: ['./show-news.component.scss']
})
export class ShowNewsComponent implements OnInit {
  article!: Article;
  articles!: Articles;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private showArticleService: ShowArticleService
  ) {
    this.activatedRoute.paramMap.subscribe({
      next: () => this.fetchData()
    })
  }

  ngOnInit(): void {
    this.fetchData();
  }

  private fetchData() {
    const newsId = this.activatedRoute.snapshot.params['id'];
    this.showArticleService.getSingleArticle(newsId).subscribe({
      next: article => {
        this.article = article[0];
        this.articles = article[1];
      }
    });
  }

  protected readonly environment = environment;
}
