import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { HORAIRES } from '../horaire/horaires';
import { PlatGalery } from '../restaurant/plat/platGalery';
import { PLATGALERYLIST } from '../restaurant/plat/platGaleryList';
import { User } from '../users/user';



@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})

export class HomeComponent {

  horaires = HORAIRES;
  platGaleryList  = PLATGALERYLIST;
  currentUser: User = {id: null, name: '', surname: '', email:'',password: '', role: ''};
  closeResult = '';

  
  constructor(
    private modalService: NgbModal,
    private router: Router) {}
  

 ngOnInit() {
     this.currentUser = JSON.parse(localStorage.getItem('token')!);
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

    
  goToPlat (platGalery: PlatGalery) {
      this.router.navigate(['/platgalery', platGalery.id])

  }

}
