import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DocumentsPageService {

  constructor(private httpClient: HttpClient) { }

  getData(documentType: string) {
    return this.httpClient.get<Document>(
      `/api/document?populate=${documentType}`
    );
  }
}
export interface DocumentItem {
  attributes: {
    name: string,
    caption: string,
    url: string
  }
}

export type DocumentType = 'etudes' | 'rapports';
export interface Document {
  data: {
    attributes: {
      rapports: {
        data: DocumentItem[]
      },
      etudes: {
        data: DocumentItem[]
      }
    }
  }
}
