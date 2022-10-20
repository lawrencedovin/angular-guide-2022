import { Component } from '@angular/core';
import { IServer } from './models/server.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements: Array<IServer> = [];

  // Server and Blueprint gets Child Value and "Adds" it to serverElements array.
  onServerAdded(newServer: any) {
    this.serverElements.push(newServer);
  }

  onBlueprintAdded(newServer: any) {
    this.serverElements.push(newServer);
  }
}
