import { Component, OnInit } from '@angular/core';
import { ServerComponent } from '../server/server.component';
import {NgForm} from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created.';
  serverStatuses = [
    { name: 'Offline', value: 'offline' },
    { name: 'Online', value: 'online' },
  ];
  servers: Array<ServerComponent> = [];
  randomTextInput: string;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = !this.allowNewServer;
    }, 2000);
  }

  onSubmit(serverForm: NgForm) {
    let {serverName, serverStatus} = serverForm.value;
    console.log(serverStatus.value);
    this.serverCreationStatus = 'Server was created.';
    let newServer = new ServerComponent();
    newServer.serverID = uuidv4();
    newServer.serverName = serverName;
    newServer.serverStatus = serverStatus;
    this.servers.push(newServer);
  }

  onUpdateRandomText(event: Event) {
    this.randomTextInput = (<HTMLInputElement>event.target).value;
  }
}
