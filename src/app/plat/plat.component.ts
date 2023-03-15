import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from '../restaurant.service';
import { PLATLIST } from './platlist';

@Component({
  selector: 'app-plat',
  templateUrl: './plat.component.html',
  styles: [
  ]
})
export class PlatComponent implements OnInit {

  platList = PLATLIST;


  constructor(
    private router: Router,
    private restaurantService : RestaurantService
    ) {}
  
    ngOnInit() {
      this.platList = this.restaurantService.getPlatList();
    }
  


  /*ngOnInit(): void {
    console.table(this.platList);
  }*/


}
