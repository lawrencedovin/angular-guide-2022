import { Component, OnInit } from '@angular/core';
import { Account } from 'src/models/account.model';
import { AccountsService } from 'src/services/accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AccountsService]
})
export class AppComponent implements OnInit{

  accounts: Array<Account> = [];

  constructor(private accountsService: AccountsService) {}

  ngOnInit() {
    this.accounts = this.accountsService.accounts;
  }


}
