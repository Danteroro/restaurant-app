import { Component, OnInit } from '@angular/core';
import { Plat } from '../plat/plat';

@Component({
  selector: 'app-add-plat',
  templateUrl: './add-plat.component.html',
  styles: [
  ]
})
export class AddPlatComponent implements OnInit {


plat: Plat | undefined ;
  picture: string | undefined;
  name: string | undefined;
  category: "..." | undefined;


ngOnInit() {
  this.plat = new Plat(this.picture, this.name, this.category!);
}


}
