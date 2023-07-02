import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from '../restaurant.service';
import { MENULIST } from './menulist';



@Component({
  selector: 'app-menu',
  templateUrl: './menucard.component.html',
  styleUrls: ['menucard.component.css']
})

export class MenuComponent implements OnInit{

  menuList: any;


constructor(
  private router: Router,
  private restaurantService : RestaurantService
  ) {}

  ngOnInit() {
    this.restaurantService.getMenu().subscribe(
      menuList => this.menuList = menuList
    );
  }


  goToHome() {
   this.router.navigate(['/contact']);
  }
  


}
