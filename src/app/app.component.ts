import { Component } from '@angular/core';
import { loadColorBlindnessMode } from './syllogimous/pages/settings/settings.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Multi Layout';

  constructor() {
    loadColorBlindnessMode();
    
    const cwarn = console.warn;
    window.console.warn = (...args) => {
      if (typeof args[0] === "string" && args[0].includes("It looks like you're using the disabled attribute")) {
        return;
      }
      cwarn(...args);
    }
  }
}
