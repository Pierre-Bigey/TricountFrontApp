import { Routes } from '@angular/router';
import {AccountListComponent} from "./Accounts/account-list/account-list.component";
import { AccountDetailComponent } from './Accounts/account-detail/account-detail.component';
import {HomeComponent} from "./home/home.component";
import {RegisterFormComponent} from "./Accounts/register-form/register-form.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home Page',
  },
  {
    path: 'accountlist',
    component: AccountListComponent,
    title: 'Account List',
  },
  {
    path: 'details/:id',
    component: AccountDetailComponent,
    title: 'Account details',
  },
  {
    path:'register',
    component: RegisterFormComponent,
    title: 'Register Account'
  }

];
