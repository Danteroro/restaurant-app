import { Component } from '@angular/core';
import { ENTREELIST } from '../carte/entreelist';

@Component({
  selector: 'app-entree-detail',
  templateUrl: './entree-detail.component.html',
  styles: [`
  .pad {
    padding: 50px;
  }
  .card {
    margin-top: 10px;
  }

  .title {
    color: rgb(233, 78, 27);
  }

  .retbutton {
  background-color: rgb(89, 173, 80);
  border-color: rgb(89, 173, 80);
  border-radius: 100%;
  position: fixed;
  bottom: 150px;
  right: 40px;
  height: 70px;
  width: 70px;

}


.retbutton:hover {
  background-color: rgb(233, 78, 27);
  border-color:rgb(233, 78, 27);
}

  `
  ]
})
export class EntreeDetailComponent {

entreelist = ENTREELIST;




}
