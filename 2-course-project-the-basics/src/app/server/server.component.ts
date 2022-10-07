import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent {

  @Input() serverID: string;
  @Input() serverName: string;
  @Input() serverStatus: string;

  changeServerStatus = () => {
    this.serverStatus = this.serverStatus === 'offline' ? 'online' : 'offline';
  }
}
