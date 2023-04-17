import { Injectable, OnInit } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';
import { RestaurantService } from './restaurant/restaurant.service';



@Injectable({
  providedIn: 'root'
})

export class AuthService implements OnInit {
  email: any;
  password: any;

  constructor(
    private restaurantService: RestaurantService
    ) {}


  isLoggedIn: boolean = false;
  redirectUrl: string | undefined;
  userList : any;


  ngOnInit() {
    this.restaurantService.getUser().subscribe(userList => this.userList = userList);
  }
  

  login(email: string, password: string): Observable<boolean> {
    this.restaurantService.getUser().subscribe(userList => this.userList = userList); 
    const isLoggedIn = this.userList.find((user: { email: string; password: string; }) => user.email == email && user.password == password);
    localStorage.setItem('token', JSON.stringify(isLoggedIn));
    return of(isLoggedIn).pipe(
      delay(1000),
      tap(isLoggedIn => this.isLoggedIn = isLoggedIn)
    );
  }


  logout() {
    this.isLoggedIn = false;
  }
}



  /*login(email: string, password: string): Observable<boolean> {
  
    const isLoggedIn = this.userList.find((user: { email: string; password: string; }) => user.email == email && user.password == password) == undefined?false:true;
    const currentUser = this.userList.find((user: { email: string; password: string; }) => user.email == email && user.password == password);
    localStorage.setItem('token', JSON.stringify(currentUser));
    return of(isLoggedIn).pipe(
      delay(1000),
      tap(isLoggedIn => this.isLoggedIn = isLoggedIn)
    );
  }*/




/*
     login(email: string, password: string): Observable<boolean> {
    
    const isLoggedIn = this.userList.find((user: { email: string; password: string; }) => user.email == email && user.password == password) == undefined?false:true;
    const currentUser = this.userList.find((user: { email: string; password: string; }) => user.email == email && user.password == password);
    localStorage.setItem('token', JSON.stringify(currentUser));
    return of(isLoggedIn).pipe(
      delay(1000),
      tap(isLoggedIn => this.isLoggedIn = isLoggedIn)
    );
  }
  
  
  
  /*
  isLogin() {
    this.message = 'Connexion en cours...';
    this.restaurantService.getUser().pipe( delay(1000))
    .subscribe(userList=>{
      const isLoggedIn = this.userList.find((user:any)=>{
        return user.email === this.email && user.password === this.password
      });
      localStorage.setItem('token', JSON.stringify(isLoggedIn));
      this.setMessage();
      if(isLoggedIn) {
        this.router.navigate(['/home']);
      } else {
        this.password = '';
        this.router.navigate(['/login']);
      }
    })
  }*/


 /*login(email: string, password: string): Observable<boolean> {
    
    const isLoggedIn = this.userList.find((user: { email: string; password: string; }) => user.email == email && user.password == password) == undefined?false:true;
    const currentUser = this.userList.find((user: { email: string; password: string; }) => user.email == email && user.password == password);
    localStorage.setItem('token', JSON.stringify(currentUser));
    return of(isLoggedIn).pipe(
      delay(1000),
      tap(isLoggedIn => this.isLoggedIn = isLoggedIn)
    );
  }*/