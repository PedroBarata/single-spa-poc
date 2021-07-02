import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-single';

  count = 0;

  incCount() {
    this.count++;
  }
  decCount() {
    this.count--;
  }
 }
