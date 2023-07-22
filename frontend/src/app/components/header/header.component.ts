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
      link: "/",
      children: [
        {
          text: 'CENTIF',
          link: ''
        },
        {
          text: 'CCGA',
          link: ''
        },
        {
          text: 'CNCA',
          link: ''
        }
      ]
    },
    {
      text: 'Textes LBC/FT',
      link: "/",
      children: [
        {
          link: '',
          text: "Textes internationaux"
        },
        {
          link: '',
          text: "Obligations"
        },
        {
          link: '',
          text: "Formulaire de déclarations"
        },
        {
          link: '',
          text: "Description de la déclaration"
        }
      ]
    },
    {
      text: 'Assujetis',
      link: "/",
      children: [
        {
          link: '',
          text: "Présentation"
        },
        {
          link: '',
          text: "Textes nationaux"
        },
        {
          link: '',
          text: "Textes régionaux"
        }
      ]
    },
    {
      text: 'Publications',
      link: "/",
      children: [
        {
          link: '',
          text: "Rapports d'activité"
        },
        {
          link: '',
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
      link: "/",
      children: [
        {
          link: '',
          text: "Nationale"
        },
        {
          link: '',
          text: "Internationale"
        }
      ]
    },
  ];
}
