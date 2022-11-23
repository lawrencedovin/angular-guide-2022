import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServersComponent } from './components/servers/servers.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/users/user/user.component';
import { EditServerComponent } from './components/servers/edit-server/edit-server.component';

const routes: Routes = [
  // If URL has just a / redirects to home route
  { path: '', component: HomeComponent },
  { path: 'servers', component: ServersComponent },
  { path: 'servers/:id/:edit', component: EditServerComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id/:name', component: UserComponent },
  // If URL is not found redirects to home route
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
