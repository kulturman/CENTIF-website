import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

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

  items = [
    {
      image: 'assets/images/slide1.jpg'
    },
    {
      image: 'assets/images/slide2.jpg'
    }
  ]

  private getRealHeight() {
    const element: HTMLElement = this.carousselItem.nativeElement;
    return element.offsetHeight;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.height = this.getRealHeight();
    }, 100);
  }

  changeDirection(newPosition: number) {
    if (newPosition < 0 || newPosition > this.items.length - 1) return;
    this.currentPosition = newPosition;
  }
}
