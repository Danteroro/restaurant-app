import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { User } from '../users/user';
import { Dessert } from './carte/dessert';
import { MENULIST } from './menu/menulist';
import { PlatGallery } from './plat/platGallery';
import { Entree } from './carte/entree';
import { Plat } from './carte/plat';
import { Horaire } from '../horaire/horaire';
import { Menu } from './menu/menu';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http:HttpClient) {}

  apiUrl: string = 'http://localhost/restaurant-app/api/home';
  apiUrlDetail: string = 'http://localhost/restaurant-app/api/platgallery';
  apiUrlEntree: string = 'http://localhost/restaurant-app/api/entree';
  apiUrlPlat: string = 'http://localhost/restaurant-app/api/plat';
  apiUrlDessert: string = 'http://localhost/restaurant-app/api/dessert';
  apiUrlMenu: string = 'http://localhost/restaurant-app/api/menu';
  apiUrlHoraire: string = 'http://localhost/restaurant-app/api/horaire';
  apiUrlUser: string = 'http://localhost/restaurant-app/api/user';
  id: any;


getPlatGallery(){
  return this.http.get<PlatGallery[]>(this.apiUrl).pipe(
    tap((response)=> this.log(response)),
    catchError((error) => this.handleError(error, 'erreur'))
    );
}  

getPlatGalleryById (platGalleryId: number) : Observable<PlatGallery> {
  return this.http.get<PlatGallery>(`http://localhost/restaurant-app/api/home/${platGalleryId}`).pipe(
    tap((response)=> this.log(response)),
    catchError((error) => this.handleError(error, 'id absente'))
  );
}

getEntree(){
  return this.http.get<Entree[]>(this.apiUrlEntree).pipe(
    tap((response)=> this.log(response)),
    catchError((error) => this.handleError(error, 'erreur'))
    );
}

getPlat(){
  return this.http.get<Plat[]>(this.apiUrlPlat).pipe(
    tap((response)=> this.log(response)),
    catchError((error) => this.handleError(error, 'erreur'))
    );
}  

getDessert(){
  return this.http.get<Dessert[]>(this.apiUrlDessert).pipe(
    tap((response)=> this.log(response)),
    catchError((error) => this.handleError(error, 'erreur'))
    );
}  

getMenu(){
  return this.http.get<Menu[]>(this.apiUrlMenu).pipe(
    tap((response)=> this.log(response)),
    catchError((error) => this.handleError(error, 'erreur'))
    );
}  

getHoraire(){
  return this.http.get<Horaire[]>(this.apiUrlHoraire).pipe(
    tap((response)=> this.log(response)),
    catchError((error) => this.handleError(error, 'erreur'))
    );
} 


  getMenuList () {
    return MENULIST;
  }


  getUserList (): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrlUser).pipe(
      tap((response)=> this.log(response)),
      catchError((error) => this.handleError(error, 'pas de users'))
    );
  }




  persistanceData(platGalery: PlatGallery): Observable<null> {
    const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  return this.http.put('api/platgalery', platGalery, httpOptions)
    .pipe(
    tap((response)=> this.log(response)),
    catchError((error) => this.handleError(error, null))
    );

}


getPlatCategoryList(): string[] {
  return ['Entree',
          'Plat',
          'Dessert'  
  ];
}

  addPlatGalery(platGalery: PlatGallery): Observable<PlatGallery> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    };
    return this.http.post<PlatGallery>('api/platgalery', platGalery, httpOptions).pipe(
    tap((response)=> this.log(response)),
    catchError((error) => this.handleError(error, null))
    );
}


  deletePlatGaleryById(platGaleryId: number): Observable<null> {
    return this.http.delete(`api/platgalery/${platGaleryId}`).pipe(
      tap((response)=> this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }


  private log(response: any) {
    console.table(response);
  }


  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }




}

/* 
  getPlatById (platId: number) : Plat | undefined {
    return PLATLIST.find(plat => plat.id == platId);
  }


 /* getEntreeList (): Observable<CategoryEntree[]> {
    return this.http.get<CategoryEntree[]>('api/CategoryEntree').pipe(
      tap((response)=> this.log(response)),
      catchError((error) => this.handleError(error, []))
      );
  }


  getPlatDetailList (): Observable<CategoryPlat[]> {
    return this.http.get<CategoryPlat[]>('api/CategoryPlat').pipe(
      tap((response)=> this.log(response)),
      catchError((error) => this.handleError(error, []))
      );
  }

 getDessertList (): Observable<Dessert[]> {
    return this.http.get<Dessert[]>('api/CategoryDessert').pipe(
      tap((response)=> this.log(response)),
      catchError((error) => this.handleError(error, []))
      );
}*/



/* getDessertById (dessertId: number) : Observable<Dessert | undefined> {
    return this.http.get<Dessert>(`api/dessert/${dessertId}`).pipe(
      tap((response)=> this.log(response)),
      catchError((error) => this.handleError(error, undefined))
      );
  }*/

  /* getPlatGaleryList (): Observable<PlatGallery[]> {
    return this.http.get<PlatGallery[]>('api/platgalery').pipe(
      tap((response)=> this.log(response)),
      catchError((error) => this.handleError(error, []))
      );
  }*/


