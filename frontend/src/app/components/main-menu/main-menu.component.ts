import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent {
  @Input() menu!: MenuItem[];
  selectedMenu: number | null = null;

  selectMenu(index: number | null) {
    this.selectedMenu = index;
  }
}

export interface MenuItem {
  text: string;
  link: string;
  children?: {
    text: string;
    link: string;
  }[]
}
