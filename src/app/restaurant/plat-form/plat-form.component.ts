import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlatGalery } from '../plat/platGalery';
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

@Input() platGalery: PlatGalery | any;
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
      this.platGalery.picture = reader.result as string;
      console.log(this.platGalery.picture)
    }
    reader.readAsDataURL(imgFile);
  }


  onSubmit() {
    if(this.isAddForm) {
      this.restaurantService.addPlatGalery(this.platGalery)
      .subscribe((platGalery: PlatGalery) => this.router.navigate(['/platgalery', platGalery.id]))
    }else {
      this.restaurantService.persistanceData(this.platGalery)
      .subscribe(() => this.router.navigate(['/platgalery', this.platGalery.id]));
      }
  }
  
}

/*onSubmit() {
  console.log('Formulaire envoyé !');
  this.router.navigate(['/plat', this.plat?.id]);
}

this.platGalery = this.restaurantService.getPlatGaleryList();*/