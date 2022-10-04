import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent {

  @Input() serverID: number = 0;
  @Input() serverStatus: string = 'offline';

  changeServerStatus = () => {
    this.serverStatus = this.serverStatus === 'offline' ? 'online' : 'offline';
  }
}
