import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Article, ShowArticleService} from "./show-article.service";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-show-news',
  templateUrl: './show-news.component.html',
  styleUrls: ['./show-news.component.scss']
})
export class ShowNewsComponent implements OnInit {
  article!: Article;

  constructor(
    private activatedRoute: ActivatedRoute,
    private showArticleService: ShowArticleService
  ) {
  }

  ngOnInit(): void {
    const newsId = this.activatedRoute.snapshot.params['id'];
    this.showArticleService.getSingleArticle(newsId).subscribe({
      next: article => {
        this.article = article;
        console.log(article.data);
      }
    });

  }

  protected readonly environment = environment;
}
