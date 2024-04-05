import { Component } from '@angular/core';
import {RouterOutlet, RouterModule, RouterLink, provideRouter} from '@angular/router';
import {AccountListComponent} from "./Accounts/account-list/account-list.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AccountListComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TricountFront';
}
