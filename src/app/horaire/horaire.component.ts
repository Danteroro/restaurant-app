import { Component } from '@angular/core';
import { HORAIRES } from './horaires';

@Component({
  selector: 'app-horaire',
  templateUrl: './horaire.component.html',
  styles: [
  ]
})
export class HoraireComponent {

horaires = HORAIRES;

}
