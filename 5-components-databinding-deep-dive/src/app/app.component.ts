import { Component } from '@angular/core';
import { IServer } from './models/server.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements: Array<IServer> = [];

  addServerElement(newServer: any) {
    this.serverElements.push(newServer);
  }
}
