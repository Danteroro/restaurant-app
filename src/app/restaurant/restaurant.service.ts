import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { User } from '../users/user';
import { Dessert } from './carte/dessert';
import { MENULIST } from './menu/menulist';
import { Plat } from './plat/plat';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http:HttpClient) {}


  getMenuList () {
    return MENULIST;
  }

  getDessertById (dessertId: number) : Observable<Dessert | undefined> {
    return this.http.get<Dessert>(`api/dessert/${dessertId}`).pipe(
      tap((response)=> this.log(response)),
      catchError((error) => this.handleError(error, undefined))
      );
  }



  getUserList (): Observable<User[]> {
    return this.http.get<User[]>('api/user').pipe(
      tap((response)=> this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }




  getPlatList (): Observable<Plat[]> {
    return this.http.get<Plat[]>('api/plat').pipe(
      tap((response)=> this.log(response)),
      catchError((error) => this.handleError(error, []))
      );
  }



  getPlatById (platId: number) : Observable<Plat | undefined> {
    return this.http.get<Plat>(`api/plat/${platId}`).pipe(
      tap((response)=> this.log(response)),
      catchError((error) => this.handleError(error, undefined))
      );
  }


  persistanceData(plat: Plat): Observable<null> {
    const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  return this.http.put('api/plat', plat, httpOptions)
    .pipe(
    tap((response)=> this.log(response)),
    catchError((error) => this.handleError(error, null))
    );

}


  addPlat(plat: Plat): Observable<Plat> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    };
    return this.http.post<Plat>('api/plat', plat, httpOptions).pipe(
    tap((response)=> this.log(response)),
    catchError((error) => this.handleError(error, null))
    );
}



  deletePlatById(platId: number): Observable<null> {
    return this.http.delete(`api/plat/${platId}`).pipe(
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



