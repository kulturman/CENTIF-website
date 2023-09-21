import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MenuItem} from "../main-menu/main-menu.component";

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

  selectMenu(index: number | null) {
    this.selectedMenu = index;
  }

  menuItemClicked(index: number, event: Event) {
    if (!this.menu[index].children) {
      this.onMenuItemLinkClick.emit();
    }
  }

  navigate() {
    this.onMenuItemLinkClick.emit();
  }

}
