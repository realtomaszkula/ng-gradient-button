import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-gradient-button>
    Hello
  </app-gradient-button>
  `,
  styles: [
    `
      :host {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      app-gradient-button {
        width: 180px;
      }
    `
  ]
})
export class AppComponent {
  title = 'gradient-button';
}
