import { Component } from '@angular/core';
import { RestaurantService } from 'src/app/restaurant/restaurant.service';


@Component({
  selector: 'app-horaire-edit',
  templateUrl: './horaire-edit.component.html',
  styles: [
  ]
})
export class HoraireEditComponent {

  horaires : any;

  constructor(private restaurantService: RestaurantService){}
  
  ngOnInit() {
    this.restaurantService.getHoraire().subscribe(
      horaires => this.horaires = horaires
    );
  }

}
