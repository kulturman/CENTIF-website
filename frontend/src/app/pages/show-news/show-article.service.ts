import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ShowArticleService {
  constructor(private httpClient: HttpClient) { }

  getSingleArticle(id: number) {
    return this.httpClient.get<Article>(`/api/articles/${id}?populate=*`);
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
                small: {
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
                small: {
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
    }
  }
}
