import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlatGalery } from '../plat/platGalery';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-edit-plat-galery',
  template: `

<app-header></app-header>


<div class="container-xl">
  <div class="row">
      <h3 class="text-center title">Modifier le plat</h3>
        <div *ngIf="platGalery" class="d-flex justify-content-center">
              <img [src]="platGalery.picture"
                   class="w-50 shadow-1-strong rounded mb-4">
        </div>
        <div *ngIf="!platGalery" class="d-flex justify-content-center" >
          <app-loader></app-loader>
        </div>
          <app-plat-form *ngIf="platGalery" [platGalery]="platGalery"></app-plat-form>  
  </div>
 </div>
 
  
<app-footer></app-footer>
  `,

  styles: [
    
    `.title {
    margin-top: 15px;
    margin-bottom: 15px;
    background-color:
  }
  `
  ]
})
export class EditPlatGaleryComponent implements OnInit {

  platGalery: PlatGalery | undefined;

  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantService
  ) {}
  
  ngOnInit() {
      const platId : string | null = this.route.snapshot.paramMap.get('id');
      if(platId) {
        this.restaurantService.getPlatGaleryById(+platId)
         .subscribe(plat => this.platGalery = plat);
      }else {
        this.platGalery = undefined;
      }
    }

}