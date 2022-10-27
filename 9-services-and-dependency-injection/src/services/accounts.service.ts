import { EventEmitter, Injectable } from '@angular/core';
import { Account } from 'src/models/account.model';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  accounts: Array<Account> = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  statusUpdate = new EventEmitter<string>();

  constructor(private loggingService: LoggingService) {}

  addAccount(name: string, status: string) {
    this.accounts.push({name, status});
    this.loggingService.logStatusUpdate(name, status);
  }

  updateStatus(id: number, status: string) {
    let account = this.accounts[id];
    account.status = status;
    this.loggingService.logStatusUpdate(account.name, status);
  }
}
