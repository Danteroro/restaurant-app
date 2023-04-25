import { Component } from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-dessert-detail',
  templateUrl: './dessert-detail.component.html',
  styles: [`
  .pad {
    padding: 50px;
  }
  .card {
    margin-top: 10px;
  }

  .title {
    color: rgb(233, 78, 27);
  }

  .retbutton {
    color: white;
    background-color: rgb(89, 173, 80);
    border-color: rgb(89, 173, 80);
    border-radius: 100%;
    position: fixed;
    bottom: 150px;
    right: 40px;
    height: 70px;
    width: 70px;

}

.retbutton:hover {
  background-color: rgb(233, 78, 27);
  border-color:rgb(233, 78, 27);
}

  `
  ]
})
export class DessertDetailComponent {

dessertlist: any;

  constructor(
    private restaurantService: RestaurantService,
    private route: ActivatedRoute,
    private router: Router) {}


}


  /*getEntree () {
    this.restaurantService.getEntreeList().subscribe(categoryEntree => this.getEntree = this.getEntree)
  }*/


