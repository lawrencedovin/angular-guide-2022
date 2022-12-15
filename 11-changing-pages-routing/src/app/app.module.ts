import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// CUSTOM MODULE
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ServerComponent } from './components/servers/server/server.component';
import { EditServerComponent } from './components/servers/edit-server/edit-server.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/users/user/user.component';
import { ServersComponent } from './components/servers/servers.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { ServersService } from './services/servers.service';
import { DeactivateGuardService } from './services/deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolverService } from './services/server-resolver.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServerComponent,
    EditServerComponent,
    UsersComponent,
    UserComponent,
    ServersComponent,
    PageNotFoundComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
  ],
  providers: [
    AuthService,
    AuthGuardService,
    ServersService,
    DeactivateGuardService,
    ServerResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
