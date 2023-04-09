import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';


@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['carte.component.css']
})

export class CarteComponent implements OnInit {

 horaires : any;

constructor(private restaurantService: RestaurantService){}
  

ngOnInit() {
    
    this.restaurantService.getHoraire().subscribe(
      horaires => this.horaires = horaires
    );

  }

}
 /*
 
 
 dessert: Dessert | undefined;
 plat: Plat | undefined;

 
 
ngOnInit() {
    
        const dessertId : string|null = this.route.snapshot.paramMap.get('id');
        if(dessertId) {
          this.restaurantService.getDessertById(+dessertId)
          .subscribe(dessert => this.dessert = dessert);
          
        }
  }
 

goDessert(dessert: Dessert) {
    this.router.navigate(['dessert', dessert.id])
  }*/