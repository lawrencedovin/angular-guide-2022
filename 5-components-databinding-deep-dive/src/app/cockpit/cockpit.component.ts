import { Component, Output, EventEmitter } from '@angular/core';
import { IServer } from '../models/server.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent  {
  // newServerName = '';
  newServerContent = '';

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
       content: this.newServerContent
    });
  }

  onBlueprintAdded(serverNameInput: HTMLInputElement) {
    // this.serverElements.push({
    //   type: 'blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
    this.blueprintCreated.emit({
      type: 'blueprint',
      name: serverNameInput.value,
      content: this.newServerContent
    });
  }
}
