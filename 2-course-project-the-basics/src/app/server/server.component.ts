import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent {
  serverID: number = 10;
  serverStatus: string = 'offline';

  changeServerStatus = () => {
    this.serverStatus = this.serverStatus === 'offline' ? 'online' : 'offline';
  }
}
