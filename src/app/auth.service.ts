import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';
import { USERS } from './users/users';
import { RestaurantService } from './restaurant/restaurant.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private restaurantService: RestaurantService) { }

  isLoggedIn: boolean = false;
  redirectUrl: string | undefined;
  users = USERS;

   login(email: string, password: string): Observable<boolean> {
  
    const isLoggedIn = this.users.find((user) => user.email == email && user.password == password) == undefined?false:true;
    const currentUser = this.users.find((user) => user.email == email && user.password == password);
    localStorage.setItem('token', JSON.stringify(currentUser));
    return of(isLoggedIn).pipe(
      delay(1000),
      tap(isLoggedIn => this.isLoggedIn = isLoggedIn)
    );
  }

  logout() {
    this.isLoggedIn = false;
  }

}

