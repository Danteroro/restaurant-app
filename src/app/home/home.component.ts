import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  template: `

  <main>

    <app-header></app-header>



<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" 
id="exampleModal" 
tabindex="-1" 
role="dialog" 
aria-labelledby="exampleModalLabel" 
aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>






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
