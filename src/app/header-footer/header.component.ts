import { NgClass } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  template: `
  
  <header class="p-3 text-bg-dark">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <img class="logo" src="assets/menu-premium-logo.png" alt="Logo menu premium" width="80">
          </a>

          <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <!--<li><a href="#" class="nav-link px-2 text-secondary">Accueil</a></li>-->
            <li><a routerLink="/menus" class="nav-link px-2 text-white">Carte & Menus</a></li>
            <li><a routerLink="/galerie" class="nav-link px-2 text-white">Galerie</a></li>
            <li><a routerLink="/contact"class="nav-link px-2 text-white">Contact</a></li>
          </ul>

          <div class="text-end">
            <button type="button" class="btn btn-outline-light me-2">
              <a routerLink="/login" class="nav-link px-2 text-white">
                Se connecter
              </a>
              </button>
            
          </div>
        </div>
      </div>
  </header>
  
  `,
  styles: [ 
  ]
})
export class HeaderComponent {
  title = 'restaurant-app';
} 
