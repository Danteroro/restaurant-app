import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

platGallery: PlatGallery | any; 
platGalleryList: PlatGallery[] | any;
auth: AuthService | any;
userRole = JSON.parse(localStorage.getItem('token')!)
  

constructor(
  private route: ActivatedRoute,
  private router: Router,
  private restaurantService: RestaurantService,
  private authService: AuthService) {}



  ngOnInit() {
    this.auth = this.authService;
    this.userRole; 
    const platGalleryId : string|null = this.route.snapshot.paramMap.get('id');
    console.log(platGalleryId);
    if(platGalleryId) {
      this.restaurantService.getPlatGalleryById(+platGalleryId)
      .subscribe((platGallery: PlatGallery) => this.platGallery = platGallery);
    }
  }


  deletePlat(platGallery: PlatGallery) {
    this.restaurantService.removePlat(platGallery.platGallery_id)
      .subscribe(() => this.goToHome());
      //console.warn(platGallery.platGallery_id);
  }


goToHome() {
  this.router.navigate(['home/'])
}


goToEditPlat(platGallery: PlatGallery) {
  this.router.navigate(['/edit/platgallery',platGallery.platGallery_id])
}

}







/*
getAllPlat(): void {
  this.restaurantService.getPlatGallery().subscribe(
    (data: PlatGallery[]) => {
      this.platGalleryList = data;
      this.success = 'Success in retrieving the list';
    },
    (err) => {
      this.error = err.message;
    }
  );
}*/


/*
  getPlatDetails()
  {
    this.restaurantService.getPlatGallery().subscribe(response =>
      {
        this.platGalleryList = response.map((item: { picture: string | undefined; name: string; }) =>
        {
          return new PlatGallery(
            item.picture,
            item.name,
            
          );
        });
      });
  }




/*
deletePlat(platGallery: PlatGallery)
{
  this.restaurantService.removePlat(this.platGallery.platGallery_id)
  .subscribe( platGallery => {
    //this.platGalleryList = this.platGalleryList.filter(p => p !== platGallery);
    console.warn(platGallery);
    this.getPlatDetails();
  })
 
}
*/


/*

update(platGallery: PlatGallery): void {
  window.localStorage.removeItem("editId");
  window.localStorage.setItem("editId", user.Id.toString());
  this.router.navigate(['edit']);
};
addUser(): void {
  this.router.navigate(['create']);
};
*/





/*
deletePlatCat(platGallery_id: number) {
  this.router.navigate(['home/'])
}
*/
/*
  deletePlatCat(platGalleryId: number) {
    this.resetAlerts();
    this.restaurantService.deletePlat(platGalleryId).subscribe(
      (res) => {
        this.platGalleryList = this.platGalleryList.filter(function(platGallery: any) {
          console.warn(platGalleryId);
          return platGallery['platGallery_id'] && +platGallery['platGallery_id'] !== +platGalleryId;
        });

        this.success = 'Deleted successfully';
      },
      (err) => (this.error = err)
    );
}





/*
deletePlat(platGallery_id: number) {
  this.restaurantService.deleteTest(platGallery_id).subscribe(data => {
    console.warn(platGallery_id);
    this.getAllPlat();
    
  })
}

deleteTest(id:number){
  this.restaurantService.deletePlat(id).subscribe(res => {
       this.platGalleryList = this.platGalleryList.filter(item => item.platGallery_id !== id);
       console.warn(id);
  })
}


/*
updateCar(picture: any, name: any, category_id: any) {
  this.resetAlerts();

  this.restaurantService
    .updatePlatGallery({
      picture: picture.value, name: name.value, category_id: category_id.value,
      platGallery_id: undefined
    })
    .subscribe(
      (res) => {
        this.success = 'Updated successfully';
      },
      (err) => (this.error = err)
    );
}
*/





























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



























/* ----- code du  22/04

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

public platGallery: any = []; 
platGalleryList: PlatGallery[] = [];
auth: AuthService | any;

userRole = JSON.parse(localStorage.getItem('token')!)
  error= '';
  success= '';
  //platGalleryList: any;

constructor(
  private route: ActivatedRoute,
  private router: Router,
  private restaurantService: RestaurantService,
  private authService: AuthService) {}



  ngOnInit() {
    this.auth = this.authService;
    this.userRole;
    this.restaurantService.getPlatGallery().subscribe((data: PlatGallery[])=>{
      this.platGalleryList = data;
      console.log(this.platGalleryList);
    });  
    const platGalleryId : string|null = this.route.snapshot.paramMap.get('id');
    console.log(platGalleryId);
    if(platGalleryId) {
      this.restaurantService.getPlatGalleryById(+platGalleryId)
      .subscribe(platGallery => this.platGallery = platGallery);
    }
  }


  deletePlat(platGallery: PlatGallery) {
    this.restaurantService.deletePlatGalleryId(platGallery.platGallery_id!)
    .subscribe(()=> this.goToHome());
    console.log(platGallery.platGallery_id)
  }



  resetAlerts() {
    this.error = '';
    this.success = '';
  }


getAllPlat(): void {
  this.restaurantService.getPlatGallery().subscribe(
    (data: PlatGallery[]) => {
      this.platGalleryList = data;
      this.success = 'Success in retrieving the list';
    },
    (err) => {
      this.error = err.message;
    }
  );
}

/*
deletePlatCat(platGallery_id: number) {
  this.router.navigate(['home/'])
}
*/
/*
  deletePlatCat(platGalleryId: number) {
    this.resetAlerts();
    this.restaurantService.deletePlat(platGalleryId).subscribe(
      (res) => {
        this.platGalleryList = this.platGalleryList.filter(function(platGallery: any) {
          console.warn(platGalleryId);
          return platGallery['platGallery_id'] && +platGallery['platGallery_id'] !== +platGalleryId;
        });

        this.success = 'Deleted successfully';
      },
      (err) => (this.error = err)
    );
}





/*
deletePlat(platGallery_id: number) {
  this.restaurantService.deleteTest(platGallery_id).subscribe(data => {
    console.warn(platGallery_id);
    this.getAllPlat();
    
  })
}

deleteTest(id:number){
  this.restaurantService.deletePlat(id).subscribe(res => {
       this.platGalleryList = this.platGalleryList.filter(item => item.platGallery_id !== id);
       console.warn(id);
  })
}


/*
updateCar(picture: any, name: any, category_id: any) {
  this.resetAlerts();

  this.restaurantService
    .updatePlatGallery({
      picture: picture.value, name: name.value, category_id: category_id.value,
      platGallery_id: undefined
    })
    .subscribe(
      (res) => {
        this.success = 'Updated successfully';
      },
      (err) => (this.error = err)
    );
}





goToHome() {
  this.router.navigate(['home/'])
}


goToEditPlat(platGallery: PlatGallery) {
  this.router.navigate(['/edit/platgallery',platGallery.platGallery_id])
}

}





*/