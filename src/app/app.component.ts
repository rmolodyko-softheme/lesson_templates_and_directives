import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  name = 'templates-and-directives';

  type: string;

  constructor() {
    setTimeout(() => {
      this.type = 'warning';
    }, 3000);
  }
}
