import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';
import { User } from './add-plat/users/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn: boolean = false;
  redirectUrl: string | undefined;
  user : User | undefined;
  users: User[] | undefined;
  

  login(name: string, password: string): Observable<boolean> {
    const isLoggedIn = (name == 'roro' && password == 'roro' );

    return of(isLoggedIn).pipe(
      delay(1000),
      tap(isLoggedIn => this.isLoggedIn = isLoggedIn)
    );
  }

  logout() {
    this.isLoggedIn = false;
  }

}
