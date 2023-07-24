import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent {
  @Input() menu!: MenuItem[];
  selectedMenu: number | null = null;
  showMobileMenu: boolean = false;
  nextLink!: string;

  constructor(private readonly router: Router) {
  }

  selectMenu(index: number | null) {
    this.selectedMenu = index;
  }

  toggleMobileMenu() {
    this.showMobileMenu = !this.showMobileMenu;
  }

  navigate(link: string) {
    this.nextLink = link;
  }

  parentLinkClicked(index: number) {
    if (!this.menu[index].link) {
      this.router.navigate([this.nextLink]);
    }
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
