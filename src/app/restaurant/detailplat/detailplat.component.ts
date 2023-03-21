import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/users/user';
import { PlatGalery } from '../plat/platGalery';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-detailplat',
  templateUrl: './detailplat.component.html',
  styles: [`

.buttonR {
    margin-top: 30px; 
    bottom: 0;
}

  
.button {
  margin-top: 100px;

}  

.container {

  padding: 20px;
}

.ret {
  background-color: rgb(89, 173, 80);
}

  `
  ]
})
   
export class DetailplatComponent implements OnInit{

platGalery: PlatGalery | undefined;
platGaleryList: PlatGalery[] | undefined;
currentUser: User = {id: null, name: '', surname: '', email:'',password: '', role: ''};


constructor(
  private route: ActivatedRoute,
  private router: Router,
  private restaurantService: RestaurantService) {}



  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('token')!);
    const platGaleryId : string|null = this.route.snapshot.paramMap.get('id');
    console.log(platGaleryId);
    if(platGaleryId) {
      this.restaurantService.getPlatGaleryById(+platGaleryId)
      .subscribe(platGalery => this.platGalery = platGalery);
      console.log((this.currentUser));

    }
  }

  deletePlat(platGalery: PlatGalery) {
    this.restaurantService.deletePlatGaleryById(platGalery.id!)
    .subscribe(()=> this.goToHome());
  }


  goToHome() {
    this.router.navigate(['home/'])
  }


  goToEditPlat(platGalery: PlatGalery) {
    this.router.navigate(['/edit/platgalery',platGalery.id])
  }

}

/*


ngOnInit() {
  this.platList = PLATLIST;
  const platId : string|null = this.route.snapshot.paramMap.get('id');
  if(platId) {
    this.plat = this.platList.find(plat => plat.id == +platId)
  }
}


ngOnInit() {
  this.platList = PLATLIST;
  const platId : string|null = this.route.snapshot.paramMap.get('id');
  if(platId) {
    this.restaurantService.getPlatById(+platId)
      .subscribe(plat => this.plat = plat);
  }
}


const token :string  = localStorage.getItem('token')?JSON.stringify(localStorage.getItem('token')):"";
      console.log(token);
    const platId : string|null = this.route.snapshot.paramMap.get('id');
    if(platId) {
      this.restaurantService.getPlatById(+platId)
      .subscribe(plat => this.plat = plat);
      this.currentUser = JSON.parse(token);
      console.log((this.currentUser));
      console.log(JSON.parse(this.currentUser['role']));
    }
  }

*/