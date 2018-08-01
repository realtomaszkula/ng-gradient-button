import { Component, HostBinding, HostListener } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-gradient-button',
  template: `
  <span>
    <ng-content></ng-content>
  </span>
  `,
  styles: [
    `
      :host {
        position: relative;
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

      :host::before {
        pointer-events: none;
        content: '';
        position: absolute;
        left: var(--x);
        top: var(--y);
        width: var(--size);
        height: var(--size);
        background: radial-gradient(circle closest-side, #9b27af, transparent);
        transform: translate(-50%, -50%);
        transition: width 0.2s ease, height 0.2s ease;
      }

      span {
        position: relative;
        pointer-events: none;
      }
    `
  ]
})
export class GradientButtonComponent {
  x: number;
  y: number;
  size: number;

  constructor(public sanitizer: DomSanitizer) {}

  @HostBinding('style')
  get style() {
    return this.sanitizer.bypassSecurityTrustStyle(
      `--x: ${this.x}px; --y: ${this.y}px; --size: ${this.size}px`
    );
  }

  @HostListener('mouseenter')
  onEnter() {
    this.size = 400;
  }

  @HostListener('mouseleave')
  onLeave() {
    this.size = 0;
  }

  @HostListener('mousemove', ['$event'])
  onMove(e: any) {
    this.x = e.pageX - e.target.offsetLeft;
    this.y = e.pageY - e.target.offsetTop;
  }
}
