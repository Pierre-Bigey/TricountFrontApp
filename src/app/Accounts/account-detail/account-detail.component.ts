import {Component, inject} from '@angular/core';
import {ActivatedRoute, RouterLink, RouterModule} from '@angular/router';
import {CommonModule} from "@angular/common";
import {AccountService} from "../../Services/account.service";
import {Account} from "../../Interfaces/account";
import {DateAgoPipe} from "../../Pipes/date-ago.pipe";

@Component({
  selector: 'app-account-detail',
  standalone: true,
  imports: [CommonModule, DateAgoPipe, RouterLink],
  templateUrl: './account-detail.component.html',
  styleUrl: './account-detail.component.css'
})
export class AccountDetailComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  accountService = inject(AccountService);
  account: Account | undefined;

  constructor() {
    const accountId = parseInt(this.route.snapshot.params['id'], 10);
    this.accountService.getAccountById(accountId).then((account) => {
      this.account = account;
    });
  }

  deleteAccount(){
    if(this.account){
      this.accountService.deleteAccount(this.account.id);
    }
  }


}
