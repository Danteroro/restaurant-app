import { Injectable } from '@angular/core';
import { InMemoryDbService} from 'angular-in-memory-web-api';
import { USERS } from './users/users';
import { PLATLIST } from './restaurant/plat/platlist';
import { DESSERTLIST } from './restaurant/carte/dessertlist';
import { ENTREELIST } from './restaurant/carte/entreelist';
import { PLATSLIST } from './restaurant/carte/platslist';



@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const plat = PLATLIST;
    const users = USERS;
    const entree = ENTREELIST;
    const plats = PLATSLIST;
    const dessert = DESSERTLIST;

    return { plat, users, entree, plats, dessert };
    
  }

}
