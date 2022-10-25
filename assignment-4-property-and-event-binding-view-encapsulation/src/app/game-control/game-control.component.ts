import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {
  incrementingNumber = 0;
  timer: ReturnType<typeof setTimeout>;

  @Output() incrementedNumberEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {

  }

  startGame() {
    this.timer = setInterval(() => {
      this.incrementingNumber++;
      this.incrementedNumberEvent.emit(this.incrementingNumber);
      console.log(this.incrementingNumber);
    }, 1000);
  }

  stopGame() {
    clearInterval(this.timer);
  }

}
