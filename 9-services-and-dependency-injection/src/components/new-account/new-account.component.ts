import { Component } from "@angular/core";
import { AccountsService } from "src/services/accounts.service";

@Component({
  selector: "app-new-account",
  templateUrl: "./new-account.component.html",
  styleUrls: ["./new-account.component.scss"]
})
export class NewAccountComponent {

  constructor(private accountsService: AccountsService) {
    // subscribe listens to changes of a value
    // If value changes then executes code.
    this.accountsService.statusUpdate.subscribe(
      (status) => alert(`New Status: ${status}`)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
  }
}
