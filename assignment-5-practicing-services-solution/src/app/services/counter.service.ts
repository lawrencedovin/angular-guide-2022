import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  counter = 0;

  incrementCounter() {
    this.counter++;
    console.log(`Counter: ${this.counter}`);
  }
}
