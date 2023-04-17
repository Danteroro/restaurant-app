import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})


export class LoginComponent implements OnInit {
 
  message: string = 'Se connecter';
  email: string | any;
  password: string | any;
  auth: AuthService | any;
  userList: any;
  user: any;
  isLoggedIn: boolean = false;



  constructor(
    private authService: AuthService,
    private router: Router
    ) {}


ngOnInit() {
  this.auth = this.authService;
}

login() {
  this.message = 'Connexion en cours...';
  this.auth.login(this.email, this.password)
  .subscribe((isLoggedIn: boolean) => {
    this.setMessage();
    if(isLoggedIn) {
      this.router.navigate(['/home']);
    } else {
      this.password = '';
      this.router.navigate(['/login']);
    }
  })
}


setMessage(): void {
  if(this.auth.isLoggedIn) {
    this.message = 'Vous êtes connecté.';
  }else {
    this.message = 'Identifiant ou mot de passe incorrect.'
  }
}


logout() {
  this.auth.logout();
  this.message = 'Vous êtes déconnecté !'
  }

}


/*login() {
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