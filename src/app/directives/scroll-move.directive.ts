import {
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
  AfterViewInit
} from '@angular/core';

@Directive({
  selector: '[appScrollMove]',
  standalone: true,
})
export class ScrollMoveDirective implements AfterViewInit {
  private startScrollY: number | null = null;
  private element!: HTMLElement;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    if (typeof window !== 'undefined') {
      const native = this.el.nativeElement;

      if (native instanceof HTMLElement) {
        this.element = native;
        this.handleScroll(); 
      } else {
        console.warn('Element is not an HTMLElement', native);
      }
    }
  }

  @HostListener('window:scroll', [])
  handleScroll() {
    if (typeof window === 'undefined' || !this.element) return;

    const rect = this.element.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const isFullyVisible = rect.top >= 0 && rect.bottom <= windowHeight;

    if (isFullyVisible && this.startScrollY === null) {
      this.startScrollY = window.scrollY;
    }

    if (this.startScrollY !== null) {
      const scrollDiff = window.scrollY - this.startScrollY;
      const translateY = Math.min(scrollDiff * 0.2, 100);

      this.renderer.setStyle(this.element, 'transform', `translateY(${translateY}px)`);
      this.renderer.setStyle(this.element, 'transition', 'transform 0.3s ease-out');
    }
  }
}
