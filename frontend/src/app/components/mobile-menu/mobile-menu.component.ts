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
  @Output() onMenuItemLinkClick = new EventEmitter();

  constructor(private readonly router: Router) {
  }

  selectMenu(index: number | null) {
    this.selectedMenu = index;
  }

  menuItemClicked(index: number) {
    if (!this.menu[index].children) {
      this.onMenuItemLinkClick.emit();
    }
  }

  navigate() {
    this.onMenuItemLinkClick.emit();
  }
}
