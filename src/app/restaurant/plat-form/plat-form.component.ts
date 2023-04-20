import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlatGallery } from '../plat/platGallery';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-plat-form',
  templateUrl: './plat-form.component.html',
  styles: [` .button {
    margin-top: 20px;
  }
  .bg-image {
    margin-top: 150px;
    margin-bottom: 0px;
  
  }

  `
  ]
})

export class PlatFormComponent implements OnInit {

@Input() platGallery: PlatGallery | any;
isAddForm: boolean | undefined;
category: string[] | undefined;



constructor(
  private restaurantService:RestaurantService,
  private router:Router) {}

  ngOnInit(): void {
    this.isAddForm = this.router.url.includes('add');
    this.category = this.restaurantService.getPlatCategoryList();
  }


  showPreview(event: any) {
    let imgFile = event.target.files[0];
    console.log(imgFile)
    let reader = new FileReader();
    reader.onload = () => {
      this.platGallery.picture = reader.result as string;
      console.log(this.platGallery.picture)
    }
    reader.readAsDataURL(imgFile);
  }


  onSubmit() {
    if(this.isAddForm) {
      this.restaurantService.createPlat(this.platGallery)
      .subscribe((platGallery: PlatGallery) => this.router.navigate(['/home']))
      console.log(this.platGallery);
    }else {
      this.restaurantService.updatePlatGalleryById(this.platGallery)
      .subscribe(() => this.router.navigate(['/platgallery', this.platGallery.platGallery_id]))
      console.log(this.platGallery);;
      }
  }



/*

  onSubmit() {
    if(this.isAddForm) {
      this.restaurantService.createPlat(this.platGallery)
      .subscribe(platGallery => this.router.navigate(['home']));
      console.log(this.platGallery);
    }
  }
  */




}




/*

  onSubmit() {
    if(this.isAddForm) {
      this.restaurantService.createPlat(this.platGallery)
      .subscribe(platGallery => this.router.navigate(['home']));
      console.log(this.platGallery);
    }
  }
  */



  


/*onSubmit() {
  console.log('Formulaire envoyé !');
  this.router.navigate(['/plat', this.plat?.id]);
}



 onSubmit() {
    if(this.isAddForm) {
      this.restaurantService.addPlatGallery(this.platGallery)
      .subscribe((platGallery: PlatGallery) => this.router.navigate(['/platgallery/add']))
      console.log(this.platGallery);
    }else {
      this.restaurantService.persistanceData(this.platGallery)
      .subscribe(() => this.router.navigate(['/platgallery', this.platGallery.platGallery_id]))
      console.log(this.platGallery);;
      }
  }





this.platGalery = this.restaurantService.getPlatGaleryList();
this.http.post<PlatGallery>('http://localhost/restaurant-app/api/home/', platGallery, httpOptions
(next => {
      console.log("successful");
    },
    error => {
      console.log("failed submitting");
    });
  }

   if(this.isAddForm) {
      console.log(this.platGallery);
      this.restaurantService.addPlatGallery(this.platGallery)
      .subscribe(platGallery => this.platGallery = platGallery);
      console.log(this.platGallery);

onSubmit() {
    if(this.isAddForm) {
      this.restaurantService.addPlatGallery(this.platGallery)
      .subscribe(platGallery => this.platGallery = platGallery);
      this.router.navigate(['/platgallery', this.platGallery.platGallery_id])
    }else {
      this.restaurantService.persistanceData(this.platGallery)
      .subscribe(() => this.router.navigate(['/platgallery', this.platGallery.id]));
      }





      
  }*/