import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HomePageService {
  constructor(private httpClient: HttpClient) {
  }

  getHomeData() {
    return this.httpClient.get<HomeText>('/api/home-text')
  }

  getLastArticles() {
    return this.httpClient.get<Articles>('api/articles?pagination[limit]=4&sort[0]=createdAt:desc&populate=coverImage')
  }
}

export interface HomeText {
  data: {
    id: number;
    attributes: {
      homeText: string
    }
  }
}

export interface Articles {
  data: {
    attributes: {
      id: number;
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
    }
  }[]
}
