import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RestaurantService } from '../restaurant.service';


 
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styles: [`
  
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
export class RegistrationComponent implements OnInit {


  regisForm: FormGroup | any;
  message = false;

  
  constructor(private fb: FormBuilder, private restaurantService: RestaurantService, private router:Router) {
 
    this.regisForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required,Validators.minLength(1), Validators.email]],
      password: ['', Validators.required],
 
    });
   }
 
   
  ngOnInit() {
  }


  removeMessage() {
    this.message = false;
    this.router.navigate(['/login']);
  }

  postdata(regisForm1: NgForm) {
    if(this.regisForm) {
      this.restaurantService.addUser(regisForm1.value.name, regisForm1.value.email, regisForm1.value.password)
      .subscribe(() => this.message=true);
    }this.regisForm.reset();
  }


  get name() { return this.regisForm.get('name'); }
  get email() { return this.regisForm.get('email'); }
  get password() { return this.regisForm.get('password'); }
  
  
}
 



/*
  postdata(regisForm1: NgForm) {
    this.restaurantService.userregistration(regisForm1.value.name, regisForm1.value.email, regisForm1.value.password, regisForm1.value.role)
      .pipe(first()).subscribe(
          data => {
              this.router.navigate(['login']);
          },
          error => {
          });
  }*/

/*
  postdata(regisForm1: NgForm) {
    if(this.regisForm) {
      this.restaurantService.userregistration(regisForm1.value.name, regisForm1.value.email, regisForm1.value.password, regisForm1.value.role)
      .subscribe((data) => this.router.navigate(['/login']))
      console.log('data');
    }
  }
  
  
  
  
  
  
  
  MAJ 13/07/23 SUPPRESSION INPUT ROLE



   regisForm: FormGroup | any;
  message = false;

  
  constructor(private fb: FormBuilder, private restaurantService: RestaurantService, private router:Router) {
 
    this.regisForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required,Validators.minLength(1), Validators.email]],
      password: ['', Validators.required],
      role: ['', Validators.required],
 
    });
   }
 
   
  ngOnInit() {
  }


  removeMessage() {
    this.message = false;
    this.router.navigate(['/login']);
  }

  postdata(regisForm1: NgForm) {
    if(this.regisForm) {
      this.restaurantService.addUser(regisForm1.value.name, regisForm1.value.email, regisForm1.value.password, regisForm1.value.role)
      .subscribe(() => this.message=true);
    }this.regisForm.reset();
  }


  get name() { return this.regisForm.get('name'); }
  get email() { return this.regisForm.get('email'); }
  get password() { return this.regisForm.get('password'); }
  get role() { return this.regisForm.get('role'); }
  
}
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  */
