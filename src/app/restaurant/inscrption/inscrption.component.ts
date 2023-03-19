import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscrption',
  templateUrl: './inscrption.component.html',
  styles: [`
  
  button {
  background: rgb(233, 78, 27);
  border: rgb(233, 78, 27);
  }

  button:hover {
    background: rgb(89, 173, 80);
    border:rgb(89, 173, 80);
  }
  
  `
   ]
})

export class InscrptionComponent {


constructor( private router: Router ) {}


  onSubmitInscription() {
    this.router.navigate(['/home']);

  }

}
