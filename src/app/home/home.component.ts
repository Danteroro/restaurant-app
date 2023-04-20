import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { PlatGallery } from '../restaurant/plat/platGallery';
import { User } from '../users/user';
import { RestaurantService } from '../restaurant/restaurant.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})



export class HomeComponent {

  platGalleryList: any;
  platGallery: PlatGallery | undefined;
  horaires: any;
  userList: any;
  //currentUser: User = {user_id: undefined, name: '', surname: '', email:'',password: '', role: ''};
  closeResult = '';
  email: string | any;
  password: string | any;
  role: string | any;
  user: User | undefined;
  auth: AuthService | any;
  isLoggedIn: any;
  userRole = JSON.parse(localStorage.getItem('token')!)
  
  
  
  constructor(
    private modalService: NgbModal,
    private router: Router,
    private restaurantService: RestaurantService,
    private authService: AuthService) {} 





 ngOnInit() {
     this.auth = this.authService;
     this.userRole;
     this.restaurantService.getPlatGallery().subscribe(
     platGalleryList => this.platGalleryList = platGalleryList );
     this.restaurantService.getHoraire().subscribe(
      horaires => this.horaires = horaires);
 }  

 
   goToPlat (platGallery: PlatGallery) {
      this.router.navigate(['/platgallery/', platGallery.platGallery_id])

  }

 
 open(content: any) {
      this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        },
      );
    }
  
  private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return `with: ${reason}`;
      }
  }

    

}

/*
isCurrentUserLog(){
  this.restaurantService.getUser()
  .subscribe(userList=>{
    const isLoggedIn = this.userList.find((user:any)=>{
      user.email === this.email && user.password === this.password && user.role === this.role
    });
    localStorage.setItem('token', JSON.stringify(isLoggedIn));
    if(isLoggedIn) {
      return true;
    } else {
      return false;
    }
  })
}

currentUser = this.isCurrentUserLog;*/
