import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';

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
    // this.firstObservableSubscription = interval(1000).subscribe(count => console.log(count));
    const customIntervalObservable = new Observable(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if(count === 2) {
          observer.complete();
        }
        if(count > 3) {
          observer.error(new Error('Count is greater than 3!'));
        }
        count++;
      }, 1000);
    });

    this.firstObservableSubscription = customIntervalObservable.subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
      alert(error.message);
    });
  }

  ngOnDestroy(): void {
      this.firstObservableSubscription.unsubscribe();
  }

}
