import { Component, OnInit, } from '@angular/core';
import { PlatGallery } from '../plat/platGallery';

@Component({
  selector: 'app-add-plat',
  template: `
  
  <app-header></app-header>



<h2 class="text-center" style="margin-top: 20px;">Ajouter un plat</h2>
    <app-plat-form [platGallery]="platGallery"></app-plat-form>



<app-footer></app-footer>
  
  
  `,
  styles: [
  ]
})
export class AddPlatComponent implements OnInit {


  platGallery: PlatGallery | undefined ;
  picture: string | undefined;
  name: string | undefined;
  category: "..." | undefined;

  ngOnInit() {
    this.platGallery = new PlatGallery();
  }

}
