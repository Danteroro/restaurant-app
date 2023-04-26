import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestaurantService } from '../restaurant/restaurant.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles:[`

.btn {
  background-color: rgb(89, 173, 80);
  border: rgb(89, 173, 80);
}

.resa {
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

export class ContactComponent {


  message = false;
  contactForm: FormGroup | any;


  constructor(private modalService: NgbModal, private fb: FormBuilder, private restaurantService: RestaurantService, private router:Router) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required,Validators.minLength(1), Validators.email]],
      tel: ['', Validators.required],
      texarea: ['', Validators.required],
 
    });
  }


  removeMessage() {
    this.message = false;
    //this.router.navigate(['/home']);
  }


  postdata(contactForm: NgForm) {
    if(this.contactForm) {
      this.message = true;
      this.contactForm.reset();
    }
  }

  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get tel() { return this.contactForm.get('tel'); }
  get texarea() { return this.contactForm.get('textarea'); }



}
