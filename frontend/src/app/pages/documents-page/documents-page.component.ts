import { Component } from '@angular/core';
import {environment} from "../../../environments/environment";
import {DocumentItem, DocumentsPageService, DocumentType} from "./documents-page.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-documents-page',
  templateUrl: './documents-page.component.html',
  styleUrls: ['./documents-page.component.scss']
})
export class DocumentsPageComponent {
  isLoading: boolean = false;
  pageData!: {
    title: string,
    documentType: string
  };
  documents!: DocumentItem[];
  ulrToDataMap = {
    '/etudes' : {
      title: 'Etudes',
      documentType: 'etudes'
    },
    '/rapports' : {
      title: "Rapports d'activités",
      documentType: 'rapports'
    },
    '/textes-nationaux' : {
      title: "Textes nationaux",
      documentType: 'nationaux'
    },
    '/textes-regionaux' : {
      title: "Textes régionaux",
      documentType: 'regionaux'
    },
    '/textes-internationaux' : {
      title: "Textes internationaux",
      documentType: 'internationaux'
    },
  }

  constructor(
    private readonly router: Router,
    private readonly documentsService: DocumentsPageService
  ) {
  }

  ngOnInit(): void {
    this.setPageData();
    this.fetchData(this.pageData.documentType);
  }

  private setPageData() {
    const route = this.router.url as keyof typeof this.ulrToDataMap;
    this.pageData = this.ulrToDataMap[route];
  }

  private fetchData(documentType: string) {
    this.isLoading = true;

    this.documentsService.getData(documentType).subscribe({
      next: data => {
        // @ts-ignore
        this.documents = data.data.attributes[documentType].data;
        this.isLoading = false;
      }
    })
  }

  protected readonly environment = environment;
}
