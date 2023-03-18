import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Plat } from '../plat/plat';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-edit-plat',
  template: `
  
  <app-header></app-header>


  <div class="container-xl">
      <div class="row">
          <h3 class="text-center title">Modifier le plat</h3>
          <div *ngIf="plat" class="d-flex justify-content-center">
              <img [src]="plat.picture"
                   class="w-50 shadow-1-strong rounded mb-4">
          </div>
          <div *ngIf="!plat" class="d-flex justify-content-center" ><app-loader></app-loader></div>
          <app-plat-form *ngIf="plat" [plat]="plat"></app-plat-form>  
      </div>
  </div>
 
  
  
<app-footer></app-footer>`,

  styles: [`.title {
    margin-top: 15px;
    margin-bottom: 15px;
    background-color:
  }
  `
  ]
})
export class EditPlatComponent implements OnInit {

plat: Plat | undefined;

constructor(
  private route: ActivatedRoute,
  private restaurantService: RestaurantService
) {}

ngOnInit() {
    const platId : string | null = this.route.snapshot.paramMap.get('id');
    if(platId) {
      this.restaurantService.getPlatById(+platId)
       .subscribe(plat => this.plat = plat);
    }else {
      this.plat = undefined;
    }
  }
}
