import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServersComponent } from './components/servers/servers.component';
import { ServerComponent } from './components/servers/server/server.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/users/user/user.component';
import { EditServerComponent } from './components/servers/edit-server/edit-server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuardService } from './services/auth-guard.service';
import { DeactivateGuardService } from './services/deactivate-guard.service';

const routes: Routes = [
  // If URL has just a / redirects to home route
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent, children: [
    { path: ':id/:name', component: UserComponent }
  ]},
  { path: 'servers',
  canActivate: [AuthGuardService],
  canActivateChild: [AuthGuardService],
  component: ServersComponent,
  children: [
    { path: ':id', component: ServerComponent },
    { path: ':id/:edit', component: EditServerComponent, canDeactivate: [DeactivateGuardService] }
  ]},
  { path: 'not-found', component: PageNotFoundComponent},
  // If URL is not found redirects to home route
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
