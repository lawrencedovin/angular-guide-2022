import { Component, OnInit } from '@angular/core';
import { ServerComponent } from '../server/server.component';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created.';
  servers: Array<ServerComponent> = [];
  counter = 0;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = !this.allowNewServer;
    }, 2000);
  }

  onCreateServer() {
    this.counter += 1;
    this.serverCreationStatus = 'Server was created.';
    let newServer = new ServerComponent();
    newServer.serverID = this.counter;
    newServer.serverStatus = 'offline';
    this.servers.push(newServer);
  }
}
