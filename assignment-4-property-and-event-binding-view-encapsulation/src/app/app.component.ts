import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  numbers: number[] = [];

  addNumber(newNumber: number) {
    this.numbers.push(newNumber);
  }
}
