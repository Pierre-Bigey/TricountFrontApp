import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from "@angular/common";
import {AccountService} from "../../Services/account.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  accountService = inject(AccountService);

  registerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  constructor() {
  }

  registerAccount(){
    this.accountService.registerAccount(
      this.registerForm.value.firstName ?? 'John' ,
      this.registerForm.value.lastName ?? 'Snow');
  }

}
