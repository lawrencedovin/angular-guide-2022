import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showSecret = false;
  timeStamps: Array<number> = [];

  toggleSecret = () => {
    this.showSecret = !this.showSecret;
    this.timeStamps.push(Date.now());
    console.log(this.timeStamps);
  }

  blueBackground = (i: number) => {
    return i >= 4
    ? {backgroundColor: 'blue'}
    : {backgroundColor: ''};
  }
}
