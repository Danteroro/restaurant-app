import { Component } from '@angular/core';
import { HORAIRES } from '../horaires';

@Component({
  selector: 'app-horaire-edit',
  templateUrl: './horaire-edit.component.html',
  styles: [
  ]
})
export class HoraireEditComponent {
  horaires = HORAIRES;


}
