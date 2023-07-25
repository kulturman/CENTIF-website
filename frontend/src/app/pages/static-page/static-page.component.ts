import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import * as path from "path";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-static-page',
  templateUrl: './static-page.component.html',
  styleUrls: ['./static-page.component.scss']
})
export class StaticPageComponent implements OnInit {
  pageData!: {
    title: string;
    strapiSingularEntityName: string;
  }
  html = '';
  urlMap = {
    '/static/presentation-centif' : {
      title: 'CENTIF',
      strapiSingularEntityName: 'presentation-centif'
    }
  };
  isLoading: boolean = false;

  constructor(
    private readonly router: Router,
    private readonly httpClient: HttpClient
  ) {
  }
  ngOnInit() {
    this.setPageData();
    this.loadData();
  }

  private setPageData() {
    const url = this.router.url;
    // @ts-ignore
    this.pageData = this.urlMap[url];
  }

  private loadData() {
    this.isLoading = true;

    this.httpClient.get<{
      data: {attributes: {content: string}}
    }>(`/api/${this.pageData.strapiSingularEntityName}`)
      .subscribe({
        next: data => {
          this.isLoading = false;
          this.html = data.data.attributes.content;
        },
        complete: () => this.isLoading = false
      })
  }
}
