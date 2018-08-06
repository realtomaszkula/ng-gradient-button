import {
  Component,
  ElementRef,
  HostListener,
  AfterViewInit
} from '@angular/core';

@Component({
  selector: 'app-gradient-button',
  template: `
  <span class="gradient" [ngStyle]="gradientStyle"></span>
  <span class="content">
    <ng-content></ng-content>
  </span>
  `,
  styles: [
    `
      :host {
        width: 100px;
        position: relative;
        text-align: center;
        appearance: none;
        background: #e91e63;
        padding: 1em 2em;
        border: none;
        color: white;
        font-size: 1.2em;
        cursor: pointer;
        outline: none;
        overflow: hidden;
        border-radius: 100px;
      }

      .content {
        position: relative;
        pointer-events: none;
      }

      .gradient {
        position: absolute;
        background: radial-gradient(circle closest-side, #9b27af, transparent);
        transform: translate(-50%, -50%);
        transition: width 0.2s ease, height 0.2s ease;
      }
    `
  ]
})
export class GradientButtonComponent implements AfterViewInit {
  isGradientVisible = false;
  gradientTop: number;
  gradientLeft: number;
  gradientRadius: number;

  constructor(public el: ElementRef<HTMLElement>) {}

  get gradientStyle() {
    const top = this.gradientTop;
    const left = this.gradientLeft;
    const gradientRadius = this.isGradientVisible ? this.gradientRadius : 0;

    return {
      'height.px': gradientRadius,
      'width.px': gradientRadius,
      'top.px': top,
      'left.px': left
    };
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.isGradientVisible = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.isGradientVisible = false;
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.gradientLeft = event.pageX - this.el.nativeElement.offsetLeft;
    this.gradientTop = event.pageY - this.el.nativeElement.offsetTop;
  }

  ngAfterViewInit() {
    this.gradientRadius = this.el.nativeElement.getBoundingClientRect().width;
  }
}
