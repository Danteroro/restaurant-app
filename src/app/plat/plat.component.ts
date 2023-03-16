import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from '../restaurant.service';
import { Plat } from './plat';

@Component({
  selector: 'app-plat',
  templateUrl: './plat.component.html',
  styles: [
  ]
})
export class PlatComponent implements OnInit {

  platList: Plat[] | undefined;


  constructor(
    private router: Router,
    private restaurantService : RestaurantService
    ) {}
  
    ngOnInit() {
      this.restaurantService.getPlatList()
      .subscribe(platList => this.platList = platList);
    }


}

 /*ngOnInit(): void {
    console.table(this.platList);
  }


ngOnInit() {
  this.platList = this.restaurantService.getPlatList();
}*/