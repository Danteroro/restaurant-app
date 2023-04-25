import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../restaurant.service';
import { PlatGallery } from '../plat/platGallery';

@Component({
  selector: 'app-edit-plat-galery',
  template: `

<app-header></app-header>


<div class="container-xl">
  <div class="row">
      <h3 class="text-center title">Modifier le plat</h3>
        <div *ngIf="platGallery" class="d-flex justify-content-center">
              <img [src]="platGallery.picture"
                   class="w-50 shadow-1-strong rounded mb-4">
        </div>
        <div *ngIf="!platGallery" class="d-flex justify-content-center" >
          <app-loader></app-loader>
        </div>
          <app-plat-form *ngIf="platGallery"[platGallery]="platGallery"></app-plat-form>  
  </div>
 </div>
 
 <!--<app-footer></app-footer>-->
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
  
  id: any;
  platGallery: PlatGallery;
  

  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantService
  ) {}
  
  ngOnInit() {
      const platGalleryId : string | null = this.route.snapshot.paramMap.get('id');
      if(platGalleryId) {
        this.restaurantService.getPlatGalleryById(+platGalleryId)
         .subscribe(platGallery => this.platGallery = platGallery);
         console.log(platGalleryId);
      }else {
        this.platGallery = undefined;
      }
    }


}


/*




   /* ngOnInit() {
      this.id=this.route.snapshot.params['id'];
      this.getOne();
    }

    getOne(){
      this.restaurantService.getOne(this.id).subscribe(
        data => {
          console.log(data);
        }
      )
    }
    

ngOnInit() {
 
  this.restaurantService.getPlatGallery().subscribe(
  platGalleryList => this.platGalleryList = platGalleryList )
}  */
