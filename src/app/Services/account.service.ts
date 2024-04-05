import { Injectable } from '@angular/core';
import {Account} from "../Interfaces/account";
import {HttpClient} from "@angular/common/http";
import {first, lastValueFrom, take} from "rxjs";
import {Router, RouterModule} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  url='http://localhost:8000/users';

  constructor(private http : HttpClient, private router: Router) {
  }


  async getAllAccounts(): Promise<Account[]> {
    // const data = await fetch(this.url);
    // return (await data.json()) ?? [];
    const request$ = this.http.get<Account[]>(this.url).pipe(take(1));
    return await lastValueFrom<Account[]>(request$);
  }

  async getAccountById(id: number): Promise<Account | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    const request$ = this.http.get<Account>(`${this.url}/${id}`).pipe(take(1));
    return lastValueFrom<Account>(request$);
  }

  registerAccount(firstname: string, lastname:string){
    //console.log("New User : "+firstname + ", "+lastname);
    const headers = { 'Content-Type': 'application/json', 'My-Custom-Header': 'foobar' };
    this.http.post(this.url, {
      "firstname": firstname,
      "lastname": lastname
    },
      { headers }).subscribe(data => {
      console.log(data);
      this.router.navigate(['/details/'+data['id']]);
    });
  }

  deleteAccount(id: number){
    this.http.delete(`${this.url}/${id}`).subscribe(data => {
      console.log(data);
    });
  }


}
