import {Component, Input} from '@angular/core';
import {MenuItem} from "../components/main-menu/main-menu.component";

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent {
  @Input() menu!: MenuItem[];
  selectedMenu: number | null = null;
  @Input() show: boolean = false;

  selectMenu(index: number | null) {
    this.selectedMenu = index;
  }

}
