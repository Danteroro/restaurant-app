import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant/restaurant.service';


@Component({
  selector: 'app-horaire',
  templateUrl: './horaire.component.html',
  styleUrls: ['horaire.css']
})
export class HoraireComponent implements OnInit  {

horaires : any;

constructor(private restaurantService: RestaurantService){}



ngOnInit() {
  
  this.restaurantService.getHoraire().subscribe(
    horaires => this.horaires = horaires)
  
}

}
