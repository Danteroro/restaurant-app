import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { User } from '../users/user';
import { Dessert } from './carte/dessert';
import { MENULIST } from './menu/menulist';
import { PlatGalery } from './plat/platGalery';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http:HttpClient) {}


  getMenuList () {
    return MENULIST;
  }

/* getDessertById (dessertId: number) : Observable<Dessert | undefined> {
    return this.http.get<Dessert>(`api/dessert/${dessertId}`).pipe(
      tap((response)=> this.log(response)),
      catchError((error) => this.handleError(error, undefined))
      );
  }*/



  getUserList (): Observable<User[]> {
    return this.http.get<User[]>('api/users').pipe(
      tap((response)=> this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }




  getPlatGaleryList (): Observable<PlatGalery[]> {
    return this.http.get<PlatGalery[]>('api/platgalery').pipe(
      tap((response)=> this.log(response)),
      catchError((error) => this.handleError(error, []))
      );
  }



  getPlatGaleryById (platGaleryId: number) : Observable<PlatGalery | undefined> {
    return this.http.get<PlatGalery>(`api/platgalery/${platGaleryId}`).pipe(
      tap((response)=> this.log(response)),
      catchError((error) => this.handleError(error, undefined))
      );
  }


  persistanceData(platGalery: PlatGalery): Observable<null> {
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

  addPlatGalery(platGalery: PlatGalery): Observable<PlatGalery> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    };
    return this.http.post<PlatGalery>('api/platgalery', platGalery, httpOptions).pipe(
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



