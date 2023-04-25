import { Component } from '@angular/core';
import { PlatGallery } from '../restaurant/plat/platGallery';
import { RestaurantService } from '../restaurant/restaurant.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
//import { User } from '../users/user';


@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})



export class HomeComponent {

  platGalleryList: any;
  platGallery: PlatGallery | undefined;
  userRole = JSON.parse(localStorage.getItem('token')!)
  auth: AuthService | any;
  horaires: any;
  // userList: any;
  // email: string | any;
  // password: string | any;
  //role: string | any;
  //user: User | undefined;
  //isLoggedIn: any;
  
  
  
  
  constructor(private router: Router,
              private restaurantService: RestaurantService,
              private authService: AuthService) {} 



ngOnInit() {
     this.auth = this.authService;
     this.userRole;
     this.restaurantService.getPlatGallery().subscribe(
     platGalleryList => this.platGalleryList = platGalleryList );
     this.restaurantService.getHoraire().subscribe(
     horaires => this.horaires = horaires);
 }  

 
   goToPlat (platGallery: PlatGallery) {
      this.router.navigate(['/platgallery/', platGallery.platGallery_id])

  }

 
 

}





/*
isCurrentUserLog(){
  this.restaurantService.getUser()
  .subscribe(userList=>{
    const isLoggedIn = this.userList.find((user:any)=>{
      user.email === this.email && user.password === this.password && user.role === this.role
    });
    localStorage.setItem('token', JSON.stringify(isLoggedIn));
    if(isLoggedIn) {
      return true;
    } else {
      return false;
    }
  })
}

currentUser = this.isCurrentUserLog;*/
