import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { IServer } from '../models/server.model';
import { ServersService } from './servers.service';

@Injectable({
  providedIn: 'root'
})

export class ServerResolverService implements Resolve<IServer> {
  constructor(private serversService: ServersService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  Observable<IServer> | Promise<IServer> | IServer {
    return this.serversService.getServer(+route.params['id']);
  }
}
