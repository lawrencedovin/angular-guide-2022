import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccountComponent } from '../components/account/account.component';
import { NewAccountComponent } from 'src/components/new-account/new-account.component';

// Services
import { AccountsService } from 'src/services/accounts.service';
import { LoggingService } from 'src/services/logging.service';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NewAccountComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AccountsService, LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
