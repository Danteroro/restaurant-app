import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `

<footer [ngClass]="'footer'"
          class=" bg-secondary d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div class="col-md-4 d-flex justify-content-center">
      <span class="mb-3 mb-md-0 text-white">© 2023 Company, Inc  Quai Antique</span>
    </div>
</footer>
 
`,

styles: [`
  
.footer {
    position: absolute;
    height: 75px;
    width: 100%;
}`

  ]
})

export class FooterComponent {

}
