import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent  {
  newServerName = '';
  newServerContent = '';

  @Output() newServerEvent = new EventEmitter<any>();
  @Output() newBlueprintEvent = new EventEmitter<any>();

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
    console.log(this.newServerName);
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
