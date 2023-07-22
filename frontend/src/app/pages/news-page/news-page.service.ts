import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiMeta} from "../../models/api-meta";
import {Article} from "../show-news/show-article.service";

@Injectable({
  providedIn: 'root'
})
export class NewsPageService {

  constructor(private httpClient: HttpClient) { }

  getData(pageNumber: number) {
    return this.httpClient.get<NewsPageData>(
      `/api/articles?sort[0]=createdAt:desc&populate=coverImage&pagination[pageSize]=10&pagination[page]=${pageNumber}`
    )
  }
}

export interface NewsPageData {
  data: Article["data"][],
  meta: ApiMeta
}
