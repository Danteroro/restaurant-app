import { Injectable, OnInit } from '@angular/core';
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
  //users = USERS;
  //userList : any;
  userList = USERS;
  //user = {user_id: null, name: '', surname: '', email:'',password: '', role: ''}
  
/*ngOnInit() {
   this.restaurantService.getUserList().subscribe(
     userList => this.userList = userList
   );console.log(this.userList);
} */
 
  login(email: string, password: string): Observable<boolean> {
    
    const isLoggedIn = this.userList.find((user: { email: string; password: string; }) => user.email == email && user.password == password) == undefined?false:true;
    const currentUser = this.userList.find((user: { email: string; password: string; }) => user.email == email && user.password == password);
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

