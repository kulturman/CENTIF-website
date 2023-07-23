import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import {Slider} from "../../pages/home-page/home-page.service";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-caroussel',
  templateUrl: './caroussel.component.html',
  styleUrls: ['./caroussel.component.scss']
})
export class CarousselComponent implements AfterViewInit {
  @ViewChild('carousselItems') carousselItems!: ElementRef;
  @ViewChild('carousselItem', {static: false}) carousselItem!: ElementRef;
  height: number = 695;
  currentPosition: number = 0;
  @Input() slider!: Slider;

  private setRealHeight() {
    this.height = this.height = Math.floor((window.innerWidth - 15) / 2.74);
  }

  ngAfterViewInit() {
    this.setRealHeight();
  }

  changeDirection(newPosition: number) {
    if (newPosition < 0 || newPosition > this.slider.data.attributes.images.data.length - 1) return;
    this.currentPosition = newPosition;
  }

  protected readonly environment = environment;
}
