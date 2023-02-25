import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MENULIST } from './menulist';



@Component({
  selector: 'app-menu',
  templateUrl: './menucard.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit{

  menuList = MENULIST;

  ngOnInit(): void {
    console.table(this.menuList);
  }

constructor(private router: Router) {}


  goToHome() {
   this.router.navigate(['/contact']);
  }
  


}
