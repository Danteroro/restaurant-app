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
      this.restaurantService.addPlatGalery(this.platGallery)
      .subscribe((platGallery: PlatGallery) => this.router.navigate(['/platgalery', platGallery.platGallery_id]))
    }else {
      this.restaurantService.persistanceData(this.platGallery)
      .subscribe(() => this.router.navigate(['/platgalery', this.platGallery.id]));
      }
  }
  
}

/*onSubmit() {
  console.log('Formulaire envoyé !');
  this.router.navigate(['/plat', this.plat?.id]);
}

this.platGalery = this.restaurantService.getPlatGaleryList();*/