import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'objection-chatlog-gen';

  toBase64(input: string) {
    return btoa(input);
  }
}
