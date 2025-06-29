import {
  AfterViewInit,
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
  HostListener
} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ScrollMoveDirective } from '../../directives/scroll-move.directive';

@Component({
  selector: 'app-call',
  standalone: true,
  templateUrl: './call.component.html',
  styleUrl: './call.component.css',
  imports:[ReactiveFormsModule,ScrollMoveDirective]
})
export class CallComponent  {  //implements AfterViewInit
    contact = new FormGroup({
    email: new FormControl(''),
  });

  // @ViewChild('img1') imgEl1!: ElementRef;
  // @ViewChild('img2') imgEl2!: ElementRef;

  // private startScrollY1: number | null = null;
  // private startScrollY2: number | null = null;

  // constructor(private _Renderer2: Renderer2) { }

  // ngAfterViewInit(): void {
  //   this._Renderer2.setStyle(this.imgEl1.nativeElement, 'transition', 'transform 0.1s linear');
  //   this._Renderer2.setStyle(this.imgEl2.nativeElement, 'transition', 'transform 0.1s linear');
  //   this.onScroll();
  // }

  // @HostListener('window:scroll')
  // onScroll(): void {
  //   this.handleScroll(this.imgEl1, 'img1');
  //   this.handleScroll(this.imgEl2, 'img2');
  // }

  // private handleScroll(imgRef: ElementRef, key: 'img1' | 'img2') {
  //   const el = imgRef.nativeElement;
  //   const rect = el.getBoundingClientRect();
  //   const windowHeight = window.innerHeight;

  //   const isFullyVisible = rect.top >= 0 && rect.bottom <= windowHeight;

  //   if (isFullyVisible && this[`startScrollY${key === 'img1' ? 1 : 2}`] === null) {
  //     this[`startScrollY${key === 'img1' ? 1 : 2}`] = window.scrollY;
  //   }

  //   const startScrollY = this[`startScrollY${key === 'img1' ? 1 : 2}`];
  //   if (startScrollY !== null) {
  //     const diff = window.scrollY - startScrollY;
  //     const translateY = Math.min(diff * 0.3, 100);

  //     this._Renderer2.setStyle(el, 'transform', `translateY(${translateY}px)`);
  //   }
  // }
}
