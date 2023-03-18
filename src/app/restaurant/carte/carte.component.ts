import { Component } from '@angular/core';


@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['carte.component.css']
})

export class CarteComponent {

  


}
 /*
 
 
 dessert: Dessert | undefined;
 plat: Plat | undefined;

 
 
ngOnInit() {
    
        const dessertId : string|null = this.route.snapshot.paramMap.get('id');
        if(dessertId) {
          this.restaurantService.getDessertById(+dessertId)
          .subscribe(dessert => this.dessert = dessert);
          
        }
  }
 

goDessert(dessert: Dessert) {
    this.router.navigate(['dessert', dessert.id])
  }*/