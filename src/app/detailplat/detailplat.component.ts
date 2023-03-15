import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Plat } from '../plat/plat';
import { PLATLIST } from '../plat/platlist';

@Component({
  selector: 'app-detailplat',
  templateUrl: './detailplat.component.html',
  styles: [`

     .buttonR {
    margin-top: 30px; 
    bottom: 0;
  }
  
  
.button {
  margin-top: 50px;
  
}  
  `
  ]
})
export class DetailplatComponent {

plat: Plat|undefined;
platList: Plat[] | undefined;

constructor(
  private route: ActivatedRoute,
  private router: Router) {}

ngOnInit() {
  this.platList = PLATLIST;
  const platId : string|null = this.route.snapshot.paramMap.get('id');
  if(platId) {
    this.plat = this.platList.find(plat => plat.id == +platId)
  }
}

goToEditPlat(plat: Plat) {
  this.router.navigate(['edit/plat',plat.id])
}

}
