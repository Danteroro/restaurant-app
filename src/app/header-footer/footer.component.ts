import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  template: `

<div class="container">
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div class="col-md-4 d-flex align-items-center">
      <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        <img src="assets/menu-premium-logo.png" alt="Logo menu premium" width="40">
      </a>
      <span class="mb-3 mb-md-0 text-muted">© 2023 Company, Inc</span>
    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li class="ms-3"><a class="text-muted" href="#"><img src="assets/logo-facebook.png" alt="Logo menu premium" width="30"></a></li>
      <li class="ms-3"><a class="text-muted" href="#"><img src="assets/logo-instagram.png" alt="Logo menu premium" width="30"></a></li>
    </ul>
  </footer>
</div>

  
  `,
  styles: [
  ]
})
export class FooterComponent {

}