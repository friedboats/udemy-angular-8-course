import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  username = '';

  get usernameIsBlank() {
    return this.username === '';
  }

  onClearInput() {
    this.username = '';
  }
}