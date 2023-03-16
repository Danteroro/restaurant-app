import { Component } from '@angular/core';



@Component({
  selector: 'app-header',
  template: `
  
  <header class="p-3 text-bg-dark">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <img [ngClass]="'logo'" 
                 src="assets/menu-premium-logo.png" 
                 alt="Logo menu premium" 
                 width="50">
          </a>

          <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><a routerLink="/menus" class="nav-link active px-2 text-white">Menus</a></li>
            <li><a routerLink="/galerie" class="nav-link px-2 text-white">Carte</a></li>
            <li><a routerLink="/contact"class="nav-link px-2 text-white">Contact</a></li>
          </ul>

          <div class="text-end">
            <button type="button" class="btn btn-outline-light me-2">
              <a routerLink="/login" class="nav-link px-2 text-white">Se connecter</a>
            </button>
            <button type="button" class="btn btn-2 me-2">
              <a routerLink="/login" class="nav-link px-2 text-white">S'inscrire'</a>
            </button>  
          </div>
        </div>
      </div>
  </header>

  


<!--<pre>{{ closeResult }}</pre>


        <div class="carousel-item active">
            <img src="assets/fond-cuisine3.jpg" alt="fond" width="100%" >
              <div class="container">
                <div class="carousel-caption">
                  <h1>Le Goût qui compte</h1>
                  <p>Vous êtes convié vous et vos proches afin d'en attester.</p>
                  
                </div>
              </div>
        </div>

<nav class="navbar navbar-dark bg-dark navbar-expand-lg ">
  <a href="/" class="navbar-brand">
    <img [ngClass]="'logo'" 
         src="assets/menu-premium-logo.png" 
         alt="Logo menu premium" 
         width="50"
         >
  </a> 

<div class="collapse navbar-collapse" id="navbarNavDropdown">
  <ul class="navbar-nav">
    <li class="classnav-item">
      <a routerLink="/menus" class="nav-link">Menus</a>
    </li>
    <li class="classnav-item">
      <a routerLink="/galerie" class="nav-link">Galerie</a>
    </li>
    <li class="classnav-item">
      <a routerLink="/contact" class="nav-link">Contact</a>
    </li>
  </ul>
</div>

<button
    type="button"
    class="navbar-toggler"
    data-toggle="#navbarNavDropdown"
    aria-controls="navbarNavDropdown"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
    </svg>
  </button>

</nav>-->
  
  `,
  styles: [ `
  .logo {
    margin-left: 10px;
  }

.btn:hover {
  background: rgb(89, 173, 80);
  border: rgb(89, 173, 80);
}
 
.btn-2 {
  background: rgb(233, 78, 27);
}


  `
  ]
})
export class HeaderComponent {
  title = 'restaurant-app';
  
}


