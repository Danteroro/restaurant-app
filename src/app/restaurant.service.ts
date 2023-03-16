import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { MENULIST } from './menu/menulist';
import { Plat } from './plat/plat';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http:HttpClient) {}

menuList = MENULIST

  getMenuList () {
    return MENULIST;
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



getPlatByCategorie() : string[] {
  return [
    'Entrée',
    'Plat',
    'Déssert',
  ]
}

}

/* getMenuList () {
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
}*/