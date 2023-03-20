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

@Input() plat: Plat|any;


isAddForm: boolean | undefined;


constructor(
  private restaurantService:RestaurantService,
  private router:Router) {}

  ngOnInit() {
    this.plat = this.restaurantService.getPlatList();
    this.isAddForm = this.router.url.includes('add');
  }

  showPreview(event) {
    let imgFile = event.target.files[0];
    console.log(imgFile)
    let reader = new FileReader();
    reader.onload = () => {
      this.plat.picture = reader.result as string;
      console.log(this.plat.picture)
    }
    reader.readAsDataURL(imgFile);
  }


  onSubmit() {
    if(this.isAddForm) {
      this.restaurantService.addPlat(this.plat)
      .subscribe((plat: Plat) => this.router.navigate(['/plat', plat.id]))
    }else {
      this.restaurantService.persistanceData(this.plat)
      .subscribe(() => this.router.navigate(['/plat', this.plat.id]));
      }
  }
  
}

/*onSubmit() {
  console.log('Formulaire envoyé !');
  this.router.navigate(['/plat', this.plat?.id]);
}*/