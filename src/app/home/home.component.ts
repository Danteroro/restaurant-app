import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  template: `

  <main>

    <app-header></app-header>

<div class="d-flex align-items-center justify-content-center" >
  <h2>Le Goût qui compte</h2>
</div>
<div class="d-flex align-items-center justify-content-center" >
  <p>Avec les yeux ont vous le dit</p>
</div>                 

<div class="container-fluid">
  <div [ngClass]="'gallery'" class="row">
    <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
      <img
        src="assets/AdobeStock_567551929_Preview.jpeg" alt="fond"
        class="w-100 shadow-1-strong rounded mb-4"
        alt="Boat on Calm Water"
      />

      <img
        src="assets/AdobeStock_558461136_Preview.jpeg" alt="fond"
        class="w-100 shadow-1-strong rounded mb-4"
        alt="Wintry Mountain Landscape"
      />
    </div>

    <div class="col-lg-4 mb-4 mb-lg-0">
      <img
        src="assets/AdobeStock_399075641_Preview.jpeg" alt="fond"
        class="w-100 shadow-1-strong rounded mb-4"
        alt="Mountains in the Clouds"
      />

      <img
        src="assets/AdobeStock_48399778_Preview.jpeg" alt="fond"
        class="w-100 shadow-1-strong rounded mb-4"
        alt="Boat on Calm Water"
      />
    </div>

    <div class="col-lg-4 mb-4 mb-lg-0">
      <img
        src="assets/AdobeStock_42689015_Preview.jpeg" alt="fond"
        class="w-100 shadow-1-strong rounded mb-4"
        alt="Waves at Sea"
      />

      <img
        src="assets/fond-cuisine.jpeg" alt="fond"
        class="w-100 shadow-1-strong rounded mb-4"
        alt="Yosemite National Park"
      />
    </div>
  </div>
</div>

        
    
</main>

  `,
  styles: [ `
  .gallery, .d-flex {
    margin-top: 15px;
  }
  `

  ]
})

export class HomeComponent {

  
}
