import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';


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
            <li><a routerLink="/galerie" class="nav-link px-2 text-white">Galerie</a></li>
            <li><a routerLink="/contact"class="nav-link px-2 text-white">Contact</a></li>
          </ul>

          <div class="text-end">
            <button type="button" class="btn btn-outline-light me-2">
              <a routerLink="/login" class="nav-link px-2 text-white">Se connecter</a>
            </button>
            <button type="button" class="btn btn-success">
                <a (click)="open(content)" class="v px-2 text-white">Réserver !</a>
              </button>   
          </div>
        </div>
      </div>
  </header>

  
<ng-template #content let-modal>
	<div class="modal-header">
		<h4 class="modal-title" id="modal-basic-title">Profile update</h4>
		<button type="button" class="btn-close" aria-label="Close" (click)="modal.dismiss('Cross click')"></button>
	</div>
	<div class="modal-body">
		<form>
			<div class="mb-3">
				<label for="dateOfBirth">Date of birth</label>
				<div class="input-group">
				</div>
			</div>
		</form>
	</div>
	<div class="modal-footer">
		<button type="button" class="btn btn-outline-dark" (click)="modal.close('Save click')">Save</button>
	</div>
</ng-template>

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
  `
  ]
})
export class HeaderComponent {
  title = 'restaurant-app';
  closeResult = '';
  dp: any;
  
    constructor(private modalService: NgbModal) {}
  
    open(content: any) {
      this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        },
      );
    }
  
    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return `with: ${reason}`;
      }
    }
}


