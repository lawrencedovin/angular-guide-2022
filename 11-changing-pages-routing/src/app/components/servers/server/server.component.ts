import { Component, OnInit } from '@angular/core';
import { IServer } from 'src/app/models/server.model';
import { ServersService } from 'src/app/services/servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {
  server: IServer;

  constructor(private serversService: ServersService) { }

  ngOnInit() {
    this.server = this.serversService.getServer(1) ?? { id: 0, name: '', status: ''};
  }

}
