import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/users/user';
import { PlatGallery } from '../plat/platGallery';
import { RestaurantService } from '../restaurant.service';
import { AuthService } from 'src/app/auth.service';

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

platGallery: PlatGallery | undefined;
platGaleryList: any;
isLoggedIn: any;
auth: AuthService | any;

constructor(
  private route: ActivatedRoute,
  private router: Router,
  private restaurantService: RestaurantService,
  private authService: AuthService) {}


  ngOnInit() {
    this.auth = this.authService;
     this.isLoggedIn = JSON.parse(localStorage.getItem('token')!);
    const platGalleryId : string|null = this.route.snapshot.paramMap.get('id');
    console.log(platGalleryId);
    if(platGalleryId) {
      this.restaurantService.getPlatGalleryById(+platGalleryId)
      .subscribe(platGallery => this.platGallery = platGallery);

    }
  }

  deletePlat(platGallery: PlatGallery) {
    this.restaurantService.deletePlatGaleryById(platGallery.platGallery_id!)
    .subscribe(()=> this.goToHome());
  }


  goToHome() {
    this.router.navigate(['home/'])
  }


  goToEditPlat(platGallery: PlatGallery) {
    this.router.navigate(['/edit/platgallery',platGallery.platGallery_id])
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


 ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('token')!);
    const platGalleryId : string|null = this.route.snapshot.paramMap.get('platGallery_id');
    console.log(platGalleryId);
    if(platGalleryId) {
      this.restaurantService.getPlatGalleryById(+platGalleryId)
      .subscribe(platGallery => this.platGallery = platGallery);
      console.log((this.currentUser));

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