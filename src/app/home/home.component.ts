import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { PlatGallery } from '../restaurant/plat/platGallery';
import { User } from '../users/user';
import { RestaurantService } from '../restaurant/restaurant.service';
import { Router } from '@angular/router';


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
  //currentUser: User = {user_id: null, name: '', surname: '', email:'',password: '', role: ''};
  closeResult = '';

  
  
  constructor(
    private modalService: NgbModal,
    private router: Router,
    private restaurantService: RestaurantService) {}
  

 ngOnInit() {
     //this.currentUser = JSON.parse(localStorage.getItem('token')!);
     this.restaurantService.getPlatGallery().subscribe(
     platGalleryList => this.platGalleryList = platGalleryList );
     this.restaurantService.getHoraire().subscribe(
      horaires => this.horaires = horaires);
    this.restaurantService.getUserList().subscribe(
      userList => this.userList = userList
    );
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
