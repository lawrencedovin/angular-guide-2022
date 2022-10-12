import { Component } from '@angular/core';
import { ServerComponent } from '../server/server.component';
import {NgForm} from '@angular/forms';
import { Dropdown } from '../models/dropdown.model';
import dropdownData from "../../assets/dropdown-data.json";
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent {
  // allowNewServer = false;
  // serverCreationStatus = 'No server was created.';
  serverCreated = false;
  randomTextInput: string;
  servers: Array<ServerComponent> = [];
  serverStatuses: Array<Dropdown> = dropdownData;
  serverName = ''
  randomServerStatus = 'offline';
  cats = ['gerry', 'michael', 'rick'];

  // constructor() {
  //   setTimeout(() => {
  //     this.allowNewServer = !this.allowNewServer;
  //   }, 2000);
  // }

  constructor() {
    this.randomServerStatus = Math.random() > .5 ? 'online' : 'offline';
  }

  onSubmit(serverForm: NgForm) {
    let { serverStatus } = serverForm.value;
    console.log(serverForm.value);
    // this.serverCreationStatus = 'Server was created.';
    this.serverCreated = true;
    let newServer = new ServerComponent();
    newServer.serverID = uuidv4();
    newServer.serverName = this.serverName;
    newServer.serverStatus = serverStatus;
    this.servers.push(newServer);
  }

    onUpdateRandomText(event: Event) {
    this.randomTextInput = (<HTMLInputElement>event.target).value;
  }

  getColor() {
    return this.randomServerStatus === 'online'
    ? {backgroundColor: 'green'}
    : {backgroundColor: 'red'};
  }
}
