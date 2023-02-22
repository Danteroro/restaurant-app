import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent {

  constructor(private router: Router) {}


  goToHome() {
   this.router.navigate(['/contact']);
  }

}
