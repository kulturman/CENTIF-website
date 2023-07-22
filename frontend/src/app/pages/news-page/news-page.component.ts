import {Component, OnInit} from '@angular/core';
import {NewsPageData, NewsPageService} from "./news-page.service";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {
  pageData!: NewsPageData;
  currentPage: number = 1;
  isLoading: boolean = false;
  constructor(private readonly newsService: NewsPageService) {
  }

  ngOnInit(): void {
    this.fetchData();
  }

  private fetchData() {
    this.isLoading = true;

    this.newsService.getData(this.currentPage).subscribe({
      next: data => {
        this.pageData = data;
        this.isLoading = false;
      }
    })
  }
  changePage(pageNumber: number) {
    if (pageNumber <= 0 || pageNumber > this.pageData.meta.pagination.pageCount) {
      return;
    }
    this.currentPage = pageNumber;
    this.fetchData();
  }

  protected readonly environment = environment;
}
