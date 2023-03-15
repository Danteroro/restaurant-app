import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plat } from '../plat/plat';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-plat-form',
  templateUrl: './plat-form.component.html',
  styles: [` .button {
    margin-top: 20px;
  }


  `
  ]
})
export class PlatFormComponent implements OnInit {

@Input() plat: Plat | undefined;
 platList: Plat[] | undefined;
  name: string[] | undefined;

constructor(
  private restaurantService:RestaurantService,
  private router:Router) {}

ngOnInit() {
  
}

onSubmit() {
  console.log('Formulaire envoyé !');
  this.router.navigate(['/plat', this.plat?.id]);
}

}

