import { Component, OnInit, } from '@angular/core';
import { PlatGalery } from '../plat/platGalery';

@Component({
  selector: 'app-add-plat',
  template: `
  
  <app-header></app-header>



<h2 class="text-center" style="margin-top: 20px;">Ajouter un plat</h2>
    <app-plat-form [platGalery]="platGalery"></app-plat-form>



<app-footer></app-footer>
  
  
  `,
  styles: [
  ]
})
export class AddPlatComponent implements OnInit {


  platGalery: PlatGalery | undefined ;
  picture: string | undefined;
  name: string | undefined;
  category: "..." | undefined;

  ngOnInit() {
    this.platGalery = new PlatGalery();
  }

}
