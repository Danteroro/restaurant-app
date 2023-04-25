import { Injectable, OnInit } from '@angular/core';
import { RestaurantService } from './restaurant/restaurant.service';
//import { HttpClient } from '@angular/common/http';
//import { Router } from '@angular/router';

//import { BehaviorSubject, Observable, catchError, delay, of, tap} from 'rxjs';
//import { User } from './users/user';



@Injectable({
  providedIn: 'root'
})

export class AuthService implements OnInit {

  email: any;
  password: any;
  log: any;
  user: any;

  constructor(private restaurantService: RestaurantService,
    //private http: HttpClient,
    //private router: Router
    ) {}


  isLoggedIn: boolean = false;
  redirectUrl: string | undefined;
  userList : any;
  apiUrlUser: string = 'http://localhost/restaurant-app/api/user';
  message: string = 'Se connecter';
  userRole = JSON.parse(localStorage.getItem('token')!)

  ngOnInit() {
    this.restaurantService.getUser().subscribe(userList => this.userList = userList);
  }
  



/*

  login() {
    this.message = 'Connexion en cours...';
    this.restaurantService.getUser()
    .subscribe((userList: any)=>{
        const isLoggedIn = this.userList.find((user:any)=>{
        return user.email === this.email && user.password === this.password
      });
      this.setMessage();
      console.log(isLoggedIn);
      console.log(userList);
      if(isLoggedIn && userList) {
        localStorage.setItem('token', JSON.stringify(isLoggedIn));
        sessionStorage.setItem('role',this.user.role);
        sessionStorage.setItem('username',this.user.id);
        this.router.navigate(['/home']);
      } else {
        this.password = '';
        this.router.navigate(['/login']);
      }
    })
  }
   

setMessage(): void {
  if(this.isLoggedIn) {
    this.message = 'Vous êtes connecté.';
  }else {
    this.message = 'Identifiant ou mot de passe incorrect.'
  }
}
*/


logout() {
  this.userRole = localStorage.removeItem('token');
  
}






}
  
  














/*




/*
  login(email: string, password: string): Observable<boolean> {
    this.restaurantService.getUser().subscribe(userList => this.userList = userList); 
    const isLoggedIn = this.userList.find((user: { email: string; password: string; }) => user.email == email && user.password == password);
    localStorage.setItem('token', JSON.stringify(isLoggedIn));
    return of(isLoggedIn).pipe(
      delay(1000),
      tap(isLoggedIn => this.isLoggedIn = isLoggedIn)
    );
  }


  login(email: any, password: any) {
    this.message = 'Connexion en cours...';
    this.restaurantService.getUser()
    .subscribe((userList: any)=>{
        const isLoggedIn = this.userList.find((user:any)=>{
          console.log(isLoggedIn);
        return user.email === email && user.password === password
      });
      localStorage.setItem('token', JSON.stringify(isLoggedIn));
      this.setMessage();
      console.log(isLoggedIn);
      console.log(userList);
      if(isLoggedIn && userList) {
        this.router.navigate(['/home']);
      } else {
        this.password = '';
        this.router.navigate(['/login']);
      }
    })
  }    








  logout() {
    localStorage.removeItem('token');
    this.isLoggedIn = false;
  }











---code fonctionnelle mais perfectible---


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
    localStorage.removeItem('token');
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