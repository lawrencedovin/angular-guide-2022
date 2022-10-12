import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showSecret = false;
  timeStamps: Array<number>;

  toggleSecret = () => {
    this.showSecret = !this.showSecret;
    this.timeStamps.push(Date.now());
  }
}
