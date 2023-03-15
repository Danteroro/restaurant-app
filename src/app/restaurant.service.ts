import { Injectable } from '@angular/core';
import { MENULIST } from './menu/menulist';
import { Plat } from './plat/plat';
import { PLATLIST } from './plat/platlist';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  getMenuList () {
    return MENULIST;
  }

  getPlatList () {
    return PLATLIST;
  }
  

  getPlatById (platId: number) : Plat | undefined {
    return PLATLIST.find(plat => plat.id == platId);
  }


getPlatByCategorie() : string[] {
  return [
    'Entrée',
    'Plat',
    'Déssert',
  ]
}

}
