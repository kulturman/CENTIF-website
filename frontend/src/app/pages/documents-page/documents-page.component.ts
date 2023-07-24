import { Component } from '@angular/core';
import {NewsPageData, NewsPageService} from "../news-page/news-page.service";
import {environment} from "../../../environments/environment";
import {Document, DocumentItem, DocumentsPageService, DocumentType} from "./documents-page.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-documents-page',
  templateUrl: './documents-page.component.html',
  styleUrls: ['./documents-page.component.scss']
})
export class DocumentsPageComponent {
  currentPage: number = 1;
  isLoading: boolean = false;
  pageTitle: string = 'Etudes';
  documentType: DocumentType = 'etudes';
  documents!: DocumentItem[];

  constructor(
    private readonly router: Router,
    private readonly documentsService: DocumentsPageService
  ) {
  }

  ngOnInit(): void {
    const route: string = this.router.url;

    if (route.includes('/rapports')) {
      this.pageTitle = "Rapports d'activités";
      this.documentType = 'rapports';
    }

    this.fetchData(this.documentType);
  }

  private fetchData(documentType: string) {
    this.isLoading = true;

    this.documentsService.getData(documentType).subscribe({
      next: data => {
        if (documentType == 'rapports') {
          this.documents = data.data.attributes.rapports.data;
        }
        else {
          this.documents = data.data.attributes.etudes.data;
        }
        this.isLoading = false;
      }
    })
  }

  protected readonly environment = environment;
}
