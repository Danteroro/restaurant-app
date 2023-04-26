import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RestaurantService } from '../restaurant.service';
import { Reservation } from './reservation';




@Component({
  selector: 'app-reservation',
  templateUrl: 'reservation.component.html',
  styles: [
    
`.resa {
        background-color: rgb(89, 173, 80);
        text-decoration: none;  
      }

  .ab {
  background: rgb(233, 78, 27);
  border: rgb(233, 78, 27);
  }

  .ab:hover {
    background: rgb(89, 173, 80);
    border:rgb(89, 173, 80);
  }
  

    `
  ]
})


export class ReservationComponent {

  resaForm: FormGroup | any;
  closeResult = '';
  /*reservation: Reservation = {
    name: '',
    email: '',
    covered: 0,
    date: (new Date()),
    infos: '',
    
  }*/
  message = false;



  constructor(private modalService: NgbModal, private fb: FormBuilder, private restaurantService: RestaurantService, private router:Router) {
    this.resaForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required,Validators.minLength(1), Validators.email]],
      covered: ['', Validators.required],
      date: ['', Validators.required],
      infos: ['', Validators.required],
 
    });
  } 

 /* newResa(): void {
    this.submitted = false;
    this.reservation = {
      name: '' ,
      email: '' ,
      covered : 0, 
      date: (new Date()),
      infos: ''
    };
    console.warn(this.reservation);
   // this.router.navigate(['/home']);
  }
*/

  postdata(resaForm: NgForm) {
    if(this.resaForm) {
      this.restaurantService.addResa(resaForm.value.name, resaForm.value.email, resaForm.value.covered, resaForm.value.date, resaForm.value.infos)
      .subscribe(() => this.message = true);
      this.resaForm.reset();
      
    }
  }

removeMessage() {
  this.message = false;
  this.router.navigate(['/home']);
}


  get name() { return this.resaForm.get('name'); }
  get email() { return this.resaForm.get('email'); }
  get covered() { return this.resaForm.get('covered'); }
  get date() { return this.resaForm.get('date'); }
  get infos() { return this.resaForm.get('infos'); }
  

 

/*
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
  }*/






}






/* ---MODAL CODE----

  closeResult = '';

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
*/