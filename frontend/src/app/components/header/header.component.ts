import { Component } from '@angular/core';
import {MenuItem} from "../main-menu/main-menu.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menu: MenuItem[] = [
    {
      text: 'Accueil',
      link: "/",
    },
    {
      text: 'Actualité',
      link: "/actualite",
    },
    {
      text: 'Présentation',
      link: "",
      children: [
        {
          text: 'CENTIF',
          link: '/static/presentation-centif'
        },
        {
          text: 'Comité National de Coordination',
          link: '/static/comite-national-coordination'
        },
        {
          text: 'Gel administratif',
          link: '/static/gel-administratif'
        }
      ]
    },
    {
      text: 'Textes LBC/FT',
      link: "",
      children: [
        {
          link: 'textes-internationaux',
          text: "Textes internationaux"
        },
        {
          link: 'textes-regionaux',
          text: "Textes régionaux"
        },
        {
          link: 'textes-nationaux',
          text: "Textes nationaux"
        }
      ]
    },
    {
      text: 'Assujettis',
      link: "",
      children: [
        {
          link: 'static/presentation-assujettis',
          text: "Présentation"
        },
        {
          link: 'static/obligations',
          text: "Obligations"
        },
        {
          link: 'static/formulaire-de-declaration',
          text: "Formulaire de déclarations"
        }
      ]
    },
    {
      text: 'Publications',
      link: "",
      children: [
        {
          link: '/rapports',
          text: "Rapports d'activité"
        },
        {
          link: '/etudes',
          text: "Etudes"
        }
      ]
    },
    {
      text: 'SFC',
      link: "/",
      children: [
        {
          link: '',
          text: "Listes nationales"
        },
        {
          link: '',
          text: "Liste des Nations Unies"
        }
      ]
    },
    {
      text: 'Coopérations',
      link: "",
      children: [
        {
          link: 'static/cooperation-nationale',
          text: "Nationale"
        },
        {
          link: 'static/cooperation-internationale',
          text: "Internationale"
        }
      ]
    },
  ];
}
