import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  template: `

  <main>

    <app-header></app-header>

         <div class="carousel-item active">
            <img src="assets/fond-cuisine3.jpg" alt="fond" width="100%" >
              <div class="container">
                <div class="carousel-caption">
                  <h1>Le Goût qui compte</h1>
                  <p>Vous êtes convié vous et vos proches afin d'en attester.</p>
                  <p><button type="button" class="btn btn-success"><a routerLink="/reservation" class="nav-link px-2 text-white">Réserver !</a></button></p>
                </div>
              </div>
          </div>
    
  </main>

  `,
  styles: [
  ]
})
export class HomeComponent {

}
