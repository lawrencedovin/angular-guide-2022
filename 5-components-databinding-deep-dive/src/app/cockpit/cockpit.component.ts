import { Component, Output, EventEmitter } from '@angular/core';
import { IServer } from '../models/server.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent  {
  newServerName = '';
  newServerContent = '';

  @Output() newServerEvent = new EventEmitter<IServer>();
  @Output() newBlueprintEvent = new EventEmitter<IServer>();

  onAddServer() {
    // this.serverElements.push({
    //   type: 'server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
    this.newServerEvent.emit({
       type: 'server',
       name: this.newServerName,
       content: this.newServerContent
    });
  }

  onAddBlueprint() {
    // this.serverElements.push({
    //   type: 'blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
    this.newBlueprintEvent.emit({
      type: 'blueprint',
      name: this.newServerName,
      content: this.newServerContent
    });
  }

}
