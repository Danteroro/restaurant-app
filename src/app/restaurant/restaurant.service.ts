import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
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

  apiUrl: string = 'http://localhost/restaurant-app/api/home';
  apiUrlDetail: string = 'http://localhost/restaurant-app/api/platgallery';
  apiUrlEntree: string = 'http://localhost/restaurant-app/api/entree';
  apiUrlPlat: string = 'http://localhost/restaurant-app/api/plat';
  apiUrlDessert: string = 'http://localhost/restaurant-app/api/dessert';
  apiUrlMenu: string = 'http://localhost/restaurant-app/api/menu';
  apiUrlHoraire: string = 'http://localhost/restaurant-app/api/horaire';
  apiUrlUser: string = 'http://localhost/restaurant-app/api/user';
  apiUrlCreateUser: string = 'http://localhost/restaurant-app/api/create-user.php';
  apiUrlRegistrationUser: string = 'http://localhost/restaurant-app/api/home/registration.php';
  apiUrlCreatePlat: string = 'http://localhost/restaurant-app/api/create.php';
  apiUrlUpdatePlat: string = 'http://localhost/restaurant-app/api/update.php';
  apiUrlDeletePlat: string = 'http://localhost/restaurant-app/api/delete.php';

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};
  PlatGallery: any;
  id: any;
  redirectUrl: string | undefined;
  baseUrl:string = "http://localhost/restaurant-app/api";
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  

  constructor(private http: HttpClient, private httpClient : HttpClient) {}


  createPlat(platGallery: PlatGallery) {
    return this.http.post('http://localhost/restaurant-app/api/create.php', platGallery, { responseType: 'text' }).pipe(
      tap((response)=> this.log(response)),
      catchError((error) => this.handleError(error, 'ne fonctionne pas'))
      );
  }
  
  addPlatGallery(platGallery: PlatGallery): Observable<PlatGallery> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    };
    return this.http.post<PlatGallery>('http://localhost/restaurant-app/api/create', platGallery, httpOptions).pipe(
    tap((response)=> this.log(response)),
    catchError((error) => this.handleError(error, null))
    );
  }

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
*/

  updatePlatGalleryById (platGallery: PlatGallery) {
    //const httpOptions = {
    //  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
   // };
    return this.http.post('http://localhost/restaurant-app/api/update/', platGallery ,{ responseType: 'text' }).pipe(
      tap((response)=> this.log(response)),
      catchError((error) => this.handleError(error, 'erreur'))
    );
  }
  
  
  
  /*
  deletePlatGalleryById(platGallery_id: number): Observable<null> {
    return this.http.delete(`http://localhost/restaurant-app/api/delete.php/${platGallery_id} `).pipe(
      tap((response)=> this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }*/



  deletePlatGalleryById(platGallery_id: number): Observable<null> {
    return this.http.delete(`http://localhost/restaurant-app/api/delete/${platGallery_id} `).pipe(
      tap((response)=> this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }


  
  /*
  
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
*/



  createUser(user: User) {
    return this.http.post('http://localhost/restaurant-app/api/create-user.php', user).pipe(
      tap((response)=> this.log(response)),
      catchError((error) => this.handleError(error, null))
      );
  }
  


  getUser(): Observable<User> {
    return this.http.get<User[]>(this.apiUrlUser).pipe(
      tap((response)=> this.log(response)),
      catchError((error) => this.handleError(error, 'pas de users'))
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


getPlatCategoryList(): string[] {
  return ['Entree',
          'Plat',
          'Dessert'  
  ];
}

  

  private log(response: any) {
    console.table(response);
  }


  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }

/*
  public userlogin(username: any, password: any) {
    return this.httpClient.post<any>(this.baseUrl + '/login.php', { username, password })
        .pipe(map((Usermodule: { name: string; }[]) => {
            this.setToken(Usermodule[0].name);
            this.getLoggedInName.emit(true);
            return Usermodule;
        }));
}*/

/*
public userregistration(name: any,email: any,password: any, role: any) {
  return this.httpClient.post<any>('http://localhost/restaurant-app/api/registration.php/', { name, email, password, role })
      .pipe(map(User => {
          return User;
      }));
}
*/

  userregistration(name: any,email: any,password: any, role: any) {
  return this.httpClient.post('http://localhost/restaurant-app/api/registration.php/', { name, email, password, role }, { responseType: 'text' })
      .pipe(map(User => {
          return User;
      }));
}

addUser(name: any,email: any,password: any, role: any){
  const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
  return this.http.post('http://localhost/restaurant-app/api/registration.php', { name, email, password, role }, { headers, responseType: 'text'}).pipe(
  tap((response)=> this.log(response)),
  catchError((error) => this.handleError(error, null))
  );
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






























}