import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Plat } from '../restaurant/plat/plat';
import { PLATLIST } from '../restaurant/plat/platlist';



@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})

export class HomeComponent {


  platList  = PLATLIST;
  currentUser: any = {id: undefined, name: '', surname: '', email:'',password: '', role: ''};
  closeResult = '';
  dp: any;
  
  constructor(
    private modalService: NgbModal,
    private router: Router) {}
  

 /*ngOnInit() {
  const session :string  = localStorage.getItem('session')?JSON.stringify(localStorage.getItem('session')):"";
 }   */
    
 
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

    
    goToPlat (plat: Plat) {
      this.router.navigate(['/plat', plat.id])

    }

}
