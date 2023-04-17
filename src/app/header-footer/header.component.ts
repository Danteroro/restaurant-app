import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../users/user';


@Component({
  selector: 'app-header',
  template: `
  
<header class="p-3 text-bg-dark">
  <div class="container">
    <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <img [ngClass]="'logo'" 
                 src="assets/Quai-Antique.png" 
                 alt="Logo menu premium" 
                 width="150">
        </a>                                                             

          <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"> 
            <li [routerLinkActive]="'active'" [routerLinkActiveOptions]=" {exact: true} ">
              <a routerLink="/home" class="nav-link px-2 text-white" >Accueil</a>
            </li>
            <li class="nav-item" [routerLinkActive]="'active'">
              <a routerLink="/carte" class="nav-link px-2 text-white" >Carte</a>
            </li>
            <li class="nav-item" [routerLinkActive]="'active'">
              <a routerLink="/menu" class="nav-link px-2 text-white" >Menu</a>
            </li>
            <li class="nav-item" [routerLinkActive]="'active'">
              <a routerLink="/contact" class="nav-link px-2 text-white" >Contact</a>
            </li>
          </ul>

        <div class="text-end">
            <button *ngIf="!this.auth.isLoggedIn" type="button" class="btn btn-outline-light me-4">
              <a routerLink="/login"class="nav-link px-2 text-white">Se connecter</a>
            </button>
            <button *ngIf="this.auth.isLoggedIn" type="button" class="btn deco me-4">
            <a (click)="logout()" class="nav-link px-2 text-white">Se déconnecter</a>
            </button>
        </div>
    </div>
  </div>
</header>

 
  `,
  styles: [ `

.logo {
    margin-right: 30px;
}

.btn:hover {
  background: rgb(89, 173, 80);
  border: rgb(89, 173, 80);
}


.btn-2 {
  background: rgb(233, 78, 27);
}


.btn-3 {
  background: rgb(89, 173, 80);
}


.deco {
  background: rgb(233, 78, 27);
}

.nav-link {
  font-size: 20px;
}


.active {
  background-color: rgb(211, 211, 211, 0.1);
  border-radius: 3px;
 
}

  `
  ]
})

export class HeaderComponent implements OnInit {
  title = 'restaurant-app';
  currentUser: User = {user_id: undefined, name: '', surname: '', email:'',password: '', role: ''};
  isLoggedIn: boolean | undefined ;
  auth: AuthService | any;



  constructor(
    private authService: AuthService,
    private router: Router
    ) {}


  ngOnInit() {
    this.auth = this.authService;
    if(this.auth.isLoggedIn){
   
      this.isLoggedIn = true;
      console.log(this.isLoggedIn)
      
    }else {
      this.isLoggedIn = false;
      console.log(this.isLoggedIn)
    }
    
  }

  logout() {
    this.auth.isLoggedIn = false;{
      this.router.navigate(['/home']); 
    }
  }
 
}


/*TEST*/