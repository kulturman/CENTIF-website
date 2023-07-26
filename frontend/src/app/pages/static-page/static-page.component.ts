import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
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
    },
    '/static/comite-national-coordination' : {
      title: 'Comité national de coordination',
      strapiSingularEntityName: 'comite-national-coordination'
    },
    '/static/gel-administratif' : {
      title: 'Gel administratif',
      strapiSingularEntityName: 'gel-administratif'
    },
    '/static/presentation-assujettis' : {
      title: 'Assujettis',
      strapiSingularEntityName: 'assujeti'
    },
    '/static/obligations' : {
      title: 'Obligations',
      strapiSingularEntityName: 'obligation'
    },
    '/static/formulaire-de-declaration' : {
      title: 'Formulaire de déclarations',
      strapiSingularEntityName: 'formulaire-de-declaration'
    },
    '/static/cooperation-nationale' : {
      title: 'Coopération nationale',
      strapiSingularEntityName: 'cooperation-nationale'
    },
    '/static/cooperation-internationale' : {
      title: 'Coopération internationale',
      strapiSingularEntityName: 'cooperation-internationale'
    },
    '/static/listes-nationales' : {
      title: 'Listes nationales',
      strapiSingularEntityName: 'listes-nationale'
    },
    '/static/listes-des-nations-unies' : {
      title: 'Listes des nations unies',
      strapiSingularEntityName: 'liste-des-nations-unie'
    },
  };
  isLoading: boolean = false;

  constructor(
    private readonly router: Router,
    private readonly httpClient: HttpClient,
    private readonly activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.url.subscribe({
      next: () => {
        if (this.pageData) {
          this.loadData();
        }
      }
    })
  }

  ngOnInit() {
    this.loadData();
  }

  private setPageData() {
    const url = this.router.url;
    // @ts-ignore
    this.pageData = this.urlMap[url];
  }

  private loadData() {
    this.setPageData();
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
