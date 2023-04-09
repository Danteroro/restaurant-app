/*import { Injectable } from '@angular/core';
import { InMemoryDbService} from 'angular-in-memory-web-api';
import { USERS } from './users/users';
import { PLATGALERYLIST } from './restaurant/plat/platGalleryList';
import { DESSERTLIST } from './restaurant/carte/dessertlist';
import { ENTREELIST } from './restaurant/carte/entreelist';
import { PLATSLIST } from './restaurant/carte/platslist';
import { HORAIRES } from './horaire/horaires';
import { MENULIST } from './restaurant/menu/menulist';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const platgalery = PLATGALERYLIST;
    const users = USERS;
    const entree = ENTREELIST;
    const plats = PLATSLIST;
    const dessert = DESSERTLIST;
    const horaire = HORAIRES;
    const menu = MENULIST;
    
    return { platgalery, users, entree, plats, dessert, horaire, menu };
    
  }

}
*/