import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Plat } from '../plat/plat';
import { PLATLIST } from '../plat/platlist';

@Component({
  selector: 'app-detailplat',
  templateUrl: './detailplat.component.html',
  styles: [
  ]
})
export class DetailplatComponent {

plat: Plat|undefined;
platList: Plat[] | undefined;

constructor(private route: ActivatedRoute) {}

ngOnInit() {
  this.platList = PLATLIST;
  const platId : string|null = this.route.snapshot.paramMap.get('id');
  if(platId) {
    this.plat = this.platList.find(plat => plat.id == +platId)
  }
}

}
