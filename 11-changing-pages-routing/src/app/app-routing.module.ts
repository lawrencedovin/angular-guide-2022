import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServersComponent } from './components/servers/servers.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  // If URL has just a / redirects to home route
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'servers', component: ServersComponent },
  { path: 'users', component: UsersComponent },
  // If URL is not found redirects to home route
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
