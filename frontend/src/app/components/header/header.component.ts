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
          text: 'Comité National de Coordination',
          link: ''
        },
        {
          text: 'Gel administratif',
          link: ''
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
      text: 'Assujetis',
      link: "/",
      children: [
        {
          link: '',
          text: "Présentation"
        },
        {
          link: '',
          text: "Obligations"
        },
        {
          link: '',
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
