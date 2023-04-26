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


  baseUrl:string = "http://localhost/restaurant-app/api/";
  redirectUrl: string | undefined;

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  platGallery: PlatGallery | any; 
  id: any;

  

  constructor(private http: HttpClient, private httpClient : HttpClient) {}





  addResa(name: any, email: any, covered: any, date: any, infos: any){
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.http.post(this.baseUrl + 'reservation.php', { name, email, covered, date, infos }, { headers, responseType: 'text'}).pipe(
    tap((response)=> this.log(response)),
    catchError((error) => this.handleError(error, null))
    );
  }
  


  addUser(name: any,email: any,password: any, role: any){
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.http.post(this.baseUrl + 'createuser.php', { name, email, password, role }, { headers, responseType: 'text'}).pipe(
    tap((response)=> this.log(response)),
    catchError((error) => this.handleError(error, null))
    );
  }
  


  

  getUser(): Observable<User> {
    return this.http.get<User[]>(this.baseUrl + 'user').pipe(
      tap((response)=> this.log(response)),
      catchError((error) => this.handleError(error, 'pas de users'))
    );
  }



  add(platGallery: PlatGallery): Observable<PlatGallery> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    };

    return this.http.post<PlatGallery>(this.baseUrl +'create.php', platGallery, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }



  

  getPlatGallery(){
    return this.http.get<PlatGallery[]>(this.baseUrl + 'home').pipe(
    tap((response)=> this.log(response)),
    catchError((error) => this.handleError(error, 'erreur'))
    );
}  


getPlatGalleryById (platGallery_id: number) : Observable<PlatGallery> {
  return this.http.get<PlatGallery>(`http://localhost/restaurant-app/api/home/${platGallery_id}`).pipe(
    tap((response)=> this.log(response)),
    catchError((error) => this.handleError(error, 'id absente'))
  );
}




  removePlat(id: number): Observable<PlatGallery[]> {
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.httpClient.get(this.baseUrl + 'delete.php?id=' + id, { headers, responseType: 'text'} ).pipe(
      tap((response)=> this.log(response)),
      catchError((error) => this.handleError(error, null))
      );
  }
  
  
  updatePlat(platGallery){
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.httpClient.put(this.baseUrl + 'update.php', platGallery, { headers, responseType: 'text'}).pipe(
      tap((response)=> this.log(response)),
      catchError((error) => this.handleError(error, null))
      );
  }




  getEntree(){
    return this.http.get<Entree[]>(this.baseUrl + 'entree').pipe(
      tap((response)=> this.log(response)),
      catchError((error) => this.handleError(error, 'erreur'))
      );
  }

  getPlat(){
    return this.http.get<Plat[]>(this.baseUrl + 'plat').pipe(
      tap((response)=> this.log(response)),
      catchError((error) => this.handleError(error, 'erreur'))
      );
  }  

  getDessert(){
    return this.http.get<Dessert[]>(this.baseUrl + 'dessert').pipe(
      tap((response)=> this.log(response)),
      catchError((error) => this.handleError(error, 'erreur'))
      );
}  

  getMenu(){
  return this.http.get<Menu[]>(this.baseUrl + 'menu').pipe(
    tap((response)=> this.log(response)),
    catchError((error) => this.handleError(error, 'erreur'))
    );
  }  

  getHoraire(){
  return this.http.get<Horaire[]>(this.baseUrl + 'horaire').pipe(
    tap((response)=> this.log(response)),
    catchError((error) => this.handleError(error, 'erreur'))
    );
  } 


  getMenuList () {
    return MENULIST;
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
getPlatCategoryList(): string[] {
  return ['Entree',
          'Plat',
          'Dessert'  
  ];
}






  /*apiUrl: string = 'http://localhost/restaurant-app/api/home';
  apiUrlUser: string = 'http://localhost/restaurant-app/api/user';
  apiUrlDetail: string = 'http://localhost/restaurant-app/api/platgallery';
  apiUrlEntree: string = 'http://localhost/restaurant-app/api/entree';
  apiUrlPlat: string = 'http://localhost/restaurant-app/api/plat';
  apiUrlDessert: string = 'http://localhost/restaurant-app/api/dessert';
  apiUrlMenu: string = 'http://localhost/restaurant-app/api/menu';
  apiUrlHoraire: string = 'http://localhost/restaurant-app/api/horaire';
  apiUrlCreatePlat: string = 'http://localhost/restaurant-app/api/create.php';
  apiUrlUpdatePlat: string = 'http://localhost/restaurant-app/api/update.php';








  userregistration(name: any,email: any,password: any, role: any) {
  return this.httpClient.post('http://localhost/restaurant-app/api/registration.php/', { name, email, password, role }, { responseType: 'text' })
      .pipe(map(User => {
          return User;
      }));
}



  update(id: number, picture: any, name: any ) {
  return this.httpClient.post<any>('http://localhost/restaurant-app/api/update', { id, picture, name})
    .pipe(map(Usermodule => {
          return Usermodule;
      }));
 
}









  delete(platGallery_id: number) {
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.httpClient.delete(`http://localhost/restaurant-app/api/delete.mysqli.php/${platGallery_id}`,{ headers, responseType: 'text'}).pipe(
      tap((response)=> this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }



  updatePlatGallery(platGallery: PlatGallery): Observable<null> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.put('http://localhost/restaurant-app/api/update.php', platGallery, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }


  public updateTest(platGallery: PlatGallery) {
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.httpClient.post(this.baseUrl + 'update.php', platGallery, { headers, responseType: 'text'})
      .pipe(map(PlatGallery=> {
            return PlatGallery;
        }));
   
  }


  add(platGallery: PlatGallery) {
    return this.http.post(`${this.baseUrl}/store.php`, { data: platGallery }).pipe(
      map((res: any) => {
        return res['data'];
      })
    );
  }*/




/*
  updatePokemon(pokemon: Pokemon): Observable<null> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.put('api/pokemons', pokemon, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }*/

/*
  updatePlatGalleryById (platGallery: PlatGallery) : Observable<PlatGallery> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<PlatGallery>('http://localhost/restaurant-app/api/update.php', platGallery, httpOptions).pipe(
      tap((response)=> this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }


  updatePlatGalleryById (platGallery: PlatGallery) {
    //const httpOptions = {
    //  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
   // };
    return this.http.put('http://localhost/restaurant-app/api/update/', platGallery ,{ responseType: 'text' }).pipe(
      tap((response)=> this.log(response)),
      catchError((error) => this.handleError(error, 'erreur'))
    );
  }
  
  



  
  persistanceData(platGallery: PlatGallery): Observable<null> {
    const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };
  return this.http.put('http://localhost/restaurant-app/api/home/', platGallery, httpOptions)
    .pipe(
    tap((response)=> this.log(response)),
    catchError((error) => this.handleError(error, null))
    );
  
  }







  
  
  deletePlatGalleryById(platGallery_id: number): Observable<null> {
    return this.http.delete(`http://localhost/restaurant-app/api/delete.php/${platGallery_id} `).pipe(
      tap((response)=> this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }



  



  createUser(user: User) {
    return this.http.post('http://localhost/restaurant-app/api/create-user.php', user).pipe(
      tap((response)=> this.log(response)),
      catchError((error) => this.handleError(error, null))
      );
  }
  




  getUserProfile(id: any): Observable<any> {
    return this.http.get(`http://localhost/restaurant-app/api/user/${id}`, 
    { headers: this.headers }).pipe(
      map((res) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }
































removePlat(id: number): Observable<PlatGallery[]> {
  const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
  return this.httpClient.delete('http://localhost/restaurant-app/api/delete/'+id, { headers, responseType: 'text'} ).pipe(
    tap((response)=> this.log(response)),
    catchError((error) => this.handleError(error, null))
    );
}



deleteProduct(id){
  return this.http.get(this.url + 'delete.php?id=' + id);
}

removePlat(id: number): Observable<PlatGallery[]> {
  const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
  return this.httpClient.delete(`http://localhost/restaurant-app/api/delete?id=${id}`, { headers, responseType: 'text'} ).pipe(
    tap((response)=> this.log(response)),
    catchError((error) => this.handleError(error, null))
    );
}




removePlat(id: number): Observable<PlatGallery[]> {
  const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
  return this.httpClient.delete(`${this.apiUrlDeletePlat}${id}`, { headers, responseType: 'text'} ).pipe(
    tap((response)=> this.log(response)),
    catchError((error) => this.handleError(error, null))
    );
}



addPlatCategory(picture: any, name: any, category_id: any){
  const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
  return this.http.post('http://localhost/restaurant-app/api/create.mysqli.php', { picture, name, category_id }, { headers, responseType: 'text'}).pipe(
  tap((response)=> this.log(response)),
  catchError((error) => this.handleError(error, null))
  );
}


addPlatGalleryTest(picture: any, name: any, category_id: any) {
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };
  return this.http.post('http://localhost/restaurant-app/api/create.mysqli.php', { picture, name, category_id }, httpOptions).pipe(
  tap((response)=> this.log(response)),
  catchError((error) => this.handleError(error, null))
  );
}



deletePlatGalleryById(platGallery_id: number): Observable<null> {
  return this.http.delete(`http://localhost/restaurant-app/api/delete/${platGallery_id} `).pipe(
    tap((response)=> this.log(response)),
    catchError((error) => this.handleError(error, null))
  );
}



deletePlatGalleryId(platGallery_id: number) {
  const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
  return this.httpClient.delete(`http://localhost/restaurant-app/api/delete.mysqli.php/${platGallery_id}`,{ headers, responseType: 'text'}).pipe(
    tap((response)=> this.log(response)),
    catchError((error) => this.handleError(error, null))
  );
}




deletePlat(id: number){
  const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
  return this.httpClient.get(this.baseUrl + 'delete?id='+ id, { headers, responseType: 'text'}).pipe(
    tap((response)=> this.log(response)),
    catchError((error) => this.handleError(error, null))
  );
}

















  public userlogin(username: any, password: any) {
    return this.httpClient.post<any>(this.baseUrl + '/login.php', { username, password })
        .pipe(map((Usermodule: { name: string; }[]) => {
            this.setToken(Usermodule[0].name);
            this.getLoggedInName.emit(true);
            return Usermodule;
        }));
}



public userregistration(name: any,email: any,password: any, role: any) {
  return this.httpClient.post<any>('http://localhost/restaurant-app/api/registration.php/', { name, email, password, role })
      .pipe(map(User => {
          return User;
      }));
}







deletePlatTest(id: number){

  return this.httpClient.delete('http://localhost/restaurant-app/api/del.php/'+ id, { responseType: 'text'}).pipe(
    tap((response)=> this.log(response)),
    catchError((error) => this.handleError(error, null))
  );
}




code moins 
deleteTest(id:number){
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };
  return this.httpClient.delete(this.baseUrl + 'delete?id='+ id, httpOptions)
  .pipe(
    tap((response)=> this.log(response)),
    catchError((error) => this.handleError(error, null))
  );
}



delete(platGallery_id: any) {
  const params = new HttpParams()
    .set('platGallery_id', platGallery_id.toString());

  return this.http.delete(`http://localhost/restaurant-app/api/delete.mysqli.php/`, { params: params });
}

















//token
setToken(token: string) {
  localStorage.setItem('token', token);
}
 
getToken() {
  return localStorage.getItem('token');
}
 
deleteToken() {
  localStorage.removeItem('token');
}
 
isLoggedIn() {
  const usertoken = this.getToken();
  if (usertoken != null) {
    return true
  }
  return false;
}









*/




















