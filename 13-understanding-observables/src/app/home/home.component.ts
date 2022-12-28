import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObservableSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    // We get a new value every second that we emit to the console.
    // The Observable is interval(1000).
    // Subscribe gets the new value emitted from the Observable interval(1000).
    this.firstObservableSubscription = interval(1000).subscribe(count => console.log(count));
  }

  ngOnDestroy(): void {
      this.firstObservableSubscription.unsubscribe();
  }

}
