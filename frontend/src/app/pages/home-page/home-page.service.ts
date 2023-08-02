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

  getSliderImages() {
    return this.httpClient.get<Slider>('api/slider?populate=*')
  }

  getUsefulLinks() {
    return [
      {
        img: 'assets/images/usefulLinks/gafi.jpeg',
        link: 'https://www.fatf-gafi.org/',
        text: 'GAFI'
      },
      {
        img: 'assets/images/usefulLinks/giaba.jpeg',
        link: 'https://giaba.org',
        text: 'GIABA'
      },
      {
        img: 'assets/images/usefulLinks/onu.jpeg',
        link: 'https://www.unodc.org/unodc/fr/',
        text: 'ONUDC'
      },
      {
        img: 'assets/images/logo.jpeg',
        link: '',
        text: 'DECLARATION EN LIGNE'
      },
      {
        img: 'assets/images/usefulLinks/supervision.jpeg',
        link: '/static/autorite-supervision',
        text: 'AUTORITE DE SUPERVISION ET DE CONTROLE',
        internalUrl: true,
        hideSecondLink: true
      },
      {
        img: 'assets/images/usefulLinks/onu.jpeg',
        link: 'https://www.un.org/securitycouncil/fr/content/un-sc-consolidated-list',
        text: 'LISTES SFC DES NATIONS UNIES'
      },
    ];
  }
}

export interface UsefulLink {
  img: string,
  link: string,
  text: string,
  hideSecondLink?: boolean,
  internalUrl?: boolean
}

export interface Slider {
  data: {
    attributes: {
      images: {
        data: [
          {
            attributes: {
              url: string
            }
          }
        ]
      }
    }
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
    }
  }[]
}
