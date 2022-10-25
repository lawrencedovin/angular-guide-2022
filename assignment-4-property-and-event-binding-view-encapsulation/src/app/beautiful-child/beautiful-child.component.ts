import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-beautiful-child',
  templateUrl: './beautiful-child.component.html',
  styleUrls: ['./beautiful-child.component.scss']
})
export class BeautifulChildComponent {

  @ViewChild('nameInput') nameInput: ElementRef;
  @Output() sendGreetEvent = new EventEmitter<string>();

  onSendGreet() {
    this.sendGreetEvent.emit(this.nameInput.nativeElement.value);
  }

}
