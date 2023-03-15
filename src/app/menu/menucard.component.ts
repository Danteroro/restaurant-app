import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from '../restaurant.service';
import { MENULIST } from './menulist';



@Component({
  selector: 'app-menu',
  templateUrl: './menucard.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit{

  menuList = MENULIST;


constructor(
  private router: Router,
  private restaurantService : RestaurantService
  ) {}

  ngOnInit() {
    this.menuList = this.restaurantService.getMenuList();
  }


  goToHome() {
   this.router.navigate(['/contact']);
  }
  


}
