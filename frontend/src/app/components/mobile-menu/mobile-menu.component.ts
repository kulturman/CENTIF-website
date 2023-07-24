import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MenuItem} from "../main-menu/main-menu.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent {
  @Input() menu!: MenuItem[];
  selectedMenu: number | null = null;
  @Input() show: boolean = false;
  nextLink!: string;
  @Output() onMenuItemLinkClick = new EventEmitter();

  constructor(private readonly router: Router) {
  }

  navigate(link: string) {
    this.nextLink = link;
    this.onMenuItemLinkClick.emit();
  }

  selectMenu(index: number | null) {
    this.selectedMenu = index;
  }

  menuItemClicked(index: number) {
    if (!this.menu[index].children) {
      this.onMenuItemLinkClick.emit();
    }

    if (!this.menu[index].link) {
      this.router.navigate([this.nextLink]);
    }
  }
}
