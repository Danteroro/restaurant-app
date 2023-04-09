import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { RestaurantService } from '../restaurant/restaurant.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})


export class LoginComponent {
 
  message: string = 'Se connecter';
  name: string | any;
  password: string | any;
  auth: AuthService | any;
  userList: any;


  constructor(
    private authService: AuthService,
    private router: Router,
    private restaurantService: RestaurantService
    ) {}


ngOnInit() {
  this.restaurantService.getUserList().subscribe(
    userList => this.userList = userList
  );console.log(this.userList);
  this.auth = this.authService;
}

setMessage(): void {
  if(this.auth.isLoggedIn) {
    this.message = 'Vous êtes connecté.';
  }else {
    this.message = 'Identifiant ou mot de passe incorrect.'
  }
}


login() {
  this.message = 'Connexion en cours...';
  this.auth.login(this.name, this.password)
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


logout() {
  this.auth.logout();
  this.message = 'Vous êtes déconnecté !'
}


}
