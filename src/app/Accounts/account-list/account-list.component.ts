import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Account} from "../../Interfaces/account";
import {AccountComponent} from "../account/account.component";
import {AccountService} from "../../Services/account.service";

@Component({
  selector: 'app-account-list-component',
  standalone: true,
  imports: [CommonModule,
    AccountComponent
  ],
  templateUrl: './account-list.component.html',
  styleUrl: './account-list.component.css'
})
export class AccountListComponent {

  account_list: Account[] = [];
  accountService: AccountService = inject(AccountService);
  filteredAccountList: Account[] = [];

  constructor() {
    this.accountService.getAllAccounts().then((accountList: Account[]) => {
      this.account_list = accountList;
      this.filteredAccountList = accountList
    });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredAccountList = this.account_list;
      return;
    }
    this.filteredAccountList = this.account_list.filter(
      (user) => user?.lastname.toLowerCase().includes(text.toLowerCase()),
    );
  }

}
