import { Injectable } from '@angular/core';

const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
  }

  clean(): void {
    window.sessionStorage.clear();
  }

  public saveUser(user: any): void {
    console.log("Saving user : "+JSON.stringify(user));
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      console.log("Get user : "+JSON.stringify(user))
      return JSON.parse(user);
    }

    return {};
  }

  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(USER_KEY);
    console.log("searching sessionstorage for user : "+window.sessionStorage.getItem(USER_KEY));
    if (user) {
      console.log("user is logged in");
      return true;
    }
    console.log("user is not logged in");

    return false;
  }

}
