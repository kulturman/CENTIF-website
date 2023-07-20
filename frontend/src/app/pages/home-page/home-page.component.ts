import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  usefulLinks = [
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
      link: '',
      text: 'AUTORITE DE SUPERVISION ET DE CONTROLE'
    },
    {
      img: 'assets/images/usefulLinks/onu.jpeg',
      link: 'https://www.un.org/securitycouncil/fr/content/un-sc-consolidated-list',
      text: 'LISTES SFC DES NATIONS UNIES'
    },
  ]
}
