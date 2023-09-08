import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {forkJoin} from "rxjs";
import {Articles} from "../home-page/home-page.service";

@Injectable({
  providedIn: 'root'
})
export class ShowArticleService {
  constructor(private httpClient: HttpClient) { }

  getSingleArticle(id: number) {
    return forkJoin([
      this.httpClient.get<Article>(`/api/articles/${id}?populate=*`),
      this.httpClient.get<Articles>(`/api/articles?pagination[limit]=5&sort[0]=createdAt:desc&populate=coverImage`)
    ]);
  }
}

export interface Article {
  data: {
    id: number;
    attributes: {
      title: string,
      content: string,
      publishedAt: string,
      coverImage: {
        data: {
          attributes: {
            formats:
              {
                small?: {
                  url: string
                },
                large: {
                  url: string
                },
                medium: {
                  url: string
                },
                thumbnail: {
                  url: string
                }
              }
          }
        }
      }
      images: {
        data: {
          attributes: {
            formats:
              {
                small?: {
                  url: string
                },
                large?: {
                  url: string
                },
                medium?: {
                  url: string
                },
                thumbnail?: {
                  url: string
                }
              }
          }
        }[
        ]
      }
    }
  }
}
