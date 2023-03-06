import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-home',
  template: `

  <main>

    <app-header></app-header>

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


<!--<pre>{{ closeResult }}</pre>-->


        <div class="carousel-item active">
            <img src="assets/fond-cuisine3.jpg" alt="fond" width="100%" >
              <div class="container">
                <div class="carousel-caption">
                  <h1>Le Goût qui compte</h1>
                  <p>Vous êtes convié vous et vos proches afin d'en attester.</p>
                  <p><button type="button" class="btn btn-success"><a (click)="open(content)" class="nav-link px-2 text-white">Réserver !</a></button></p>
                </div>
              </div>
        </div>

    
  </main>

  `,
  styles: [
  ]
})
export class HomeComponent {

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
