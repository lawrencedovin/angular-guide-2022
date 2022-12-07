import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IServer } from 'src/app/models/server.model';
import { ServersService } from 'src/app/services/servers.service';
import { CanComponentDeactivate } from 'src/app/services/deactivate-guard.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.scss']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: IServer;
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;
  id: number;
  subscription: Subscription;

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    this.route.queryParams
      .subscribe(
        (queryParams: Params) => {
          this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
        }
    );
    this.id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(this.id) ?? { id: 0, name: '', status: ''}
    // Subscribe route params to update the id if params change
    this.subscription = this.route.params
    .subscribe(
      (params: Params) => {
        this.id = params['id'];
      }
    );
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;
    this.router.navigate(['../', {relativeTo: this.route}]);
  }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    if(!this.allowEdit) {
      return true;
    }
    if((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changesSaved) {
      return confirm('Do you want to discard the changes?');
    }
    else {
      return true;
    }
  }

}
