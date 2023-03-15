import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `


  <footer [ngClass]="'footer'"
          class=" bg-secondary d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div class="col-md-4 d-flex justify-content-center">
      <span class="mb-3 mb-md-0 text-white">© 2023 Company, Inc</span>
    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li class="ms-3"><a class="text-muted" href="#"><img src="assets/logo-facebook.png" alt="Logo menu premium" width="30"></a></li>
      <li class="ms-3"><a class="text-muted" href="#"><img src="assets/logo-instagram.png" alt="Logo menu premium" width="30"></a></li>
    </ul>
  </footer>

  
  
  `,
  styles: [`.footer {
    position: relative;
    width: 100%;
    bottom: 0;
  }`

  ]
})
export class FooterComponent {

}
