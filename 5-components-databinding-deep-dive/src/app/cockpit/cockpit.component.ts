import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { IServer } from '../models/server.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent  {
  // newServerName = '';
  // newServerContent = '';
  // Argument of @ViewChild is the selector which you can input the name
  // of the local reference ie. #serverContentInput
  // Can also use a Component as an argument ie. CockpitComponent
  // To get the first occurence of the CockpitComponent
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  // server and blueprint created values sent to the Parent Component.
  @Output() serverCreated = new EventEmitter<IServer>();
  @Output() blueprintCreated = new EventEmitter<IServer>();

  onServerAdded(serverNameInput: HTMLInputElement) {
    // this.serverElements.push({
    //   type: 'server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
    this.serverCreated.emit({
       type: 'server',
       name: serverNameInput.value,
       content: this.serverContentInput.nativeElement.value
    });
  }

  onBlueprintAdded(serverNameInput: HTMLInputElement) {
    // this.serverElements.push({
    //   type: 'blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
    // this.blueprintCreated.emit({
    //   type: 'blueprint',
    //   name: serverNameInput.value,
    //   content: this.newServerContent
    // });
    this.blueprintCreated.emit({
      type: 'blueprint',
      name: serverNameInput.value,
      content: this.serverContentInput.nativeElement.value
    });
  }
}
