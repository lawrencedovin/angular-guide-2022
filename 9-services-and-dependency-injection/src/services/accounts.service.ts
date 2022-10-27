import { Injectable } from '@angular/core';
import { Account } from 'src/models/account.model';

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

  addAccount(name: string, status: string) {
    this.accounts.push({name, status});
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
  }
}
