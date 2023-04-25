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


  angForm: FormGroup | any;

  
  constructor(private fb: FormBuilder, private restaurantService: RestaurantService, private router:Router) {
 
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required,Validators.minLength(1), Validators.email]],
      password: ['', Validators.required],
      role: ['', Validators.required],
 
    });
   }
 
   
  ngOnInit() {
  }


  postdata(angForm1: NgForm) {
    if(this.angForm) {
      this.restaurantService.addUser(angForm1.value.name, angForm1.value.email, angForm1.value.password, angForm1.value.role)
      .subscribe(() => this.router.navigate(['/login']));
    }
  }


  get name() { return this.angForm.get('name'); }
  get email() { return this.angForm.get('email'); }
  get password() { return this.angForm.get('password'); }
  get role() { return this.angForm.get('role'); }
  
}
 



/*
  postdata(angForm1: NgForm) {
    this.restaurantService.userregistration(angForm1.value.name, angForm1.value.email, angForm1.value.password, angForm1.value.role)
      .pipe(first()).subscribe(
          data => {
              this.router.navigate(['login']);
          },
          error => {
          });
  }*/

/*
  postdata(angForm1: NgForm) {
    if(this.angForm) {
      this.restaurantService.userregistration(angForm1.value.name, angForm1.value.email, angForm1.value.password, angForm1.value.role)
      .subscribe((data) => this.router.navigate(['/login']))
      console.log('data');
    }
  }*/
