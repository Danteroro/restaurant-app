import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlatGallery } from '../plat/platGallery';
import { RestaurantService } from '../restaurant.service';
//import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-plat-form',
  templateUrl: './plat-form.component.html',
  styles: [` .button {
    margin-top: 20px;
  }
  .bg-image {
    margin-top: 150px;
    margin-bottom: 0px;
  
  }
  `
  ]
})

  export class PlatFormComponent implements OnInit {

    @Input() platGallery: PlatGallery;
   // error = '';
   // success = '';
      isAddForm: boolean | any;
   //platGalleryList: PlatGallery[] = [];

    
    constructor(private restaurantService:RestaurantService,
                private router:Router) {}
    
                
      ngOnInit(): void {
        this.isAddForm = this.router.url.includes('add');
        //this.category = this.restaurantService.getPlatCategoryList();
        //this.getAllPlat();
      }


      onSubmit() {
        if(this.isAddForm) {
          this.restaurantService.add(this.platGallery)
            .subscribe((platGallery: PlatGallery) => this.router.navigate(['/home']));
            //this.success = 'Success in retrieving the list';
            console.warn(this.platGallery);
        } else {
          this.restaurantService.updatePlat(this.platGallery)
            .subscribe(() => this.router.navigate(['/home']));
        }
      }


      showPreview(event: any) {
        let imgFile = event.target.files[0];
        console.log(imgFile)
        let reader = new FileReader();
        reader.onload = () => {
          this.platGallery.picture = reader.result as string;
          console.log(this.platGallery.picture)
        }
        reader.readAsDataURL(imgFile);
      }
    


}











/*


    
      resetAlerts() {
        this.error = '';
      }
    



     /* onSubmit(p: NgForm) {
        if(this.isAddForm) {
          this.restaurantService.add(this.platGallery)
          .subscribe((platGallery: PlatGallery) => this.router.navigate(['/home']))
          console.log(this.platGallery);
        }else {
          this.restaurantService.updatePlatGallery(this.platGallery)
          .subscribe(() => this.router.navigate(['/platgallery', this.platGallery.platGallery_id]))
          console.log(this.platGallery);;
          }
      }


      getAllPlat(): void {
        this.restaurantService.getPlatGallery().subscribe(
          (data: PlatGallery[]) => {
            this.platGalleryList = data;
            this.success = 'Success in retrieving the list';
          },
          (err) => {
            this.error = err.message;
          }
        );
      }
      








      onSubmit(p: NgForm) {
        if(this.isAddForm) {
          this.restaurantService.add(this.platGallery).subscribe(
            (res: PlatGallery) => {
              // Update the list of cars
              console.log(res);
              this.platGalleryList.push(res);
              console.log(res);
              this.router.navigate(['home'])
              // Inform the user
              this.success = 'Created successfully';
              // Reset the form
  
              p.reset();
            },
            (err) => (this.error = err.message)
          );
        } else {
          this.restaurantService.updatePlatGalleryById(this.platGallery)
            .subscribe(() => this.router.navigate(['/platgallery', this.platGallery.platGallery_id]));
        }
      }





















updateCar(picture: any, name: any, category_id: any) {
      this.resetAlerts();
    
      this.restaurantService
        .updatePlatGallery({platGallery_id: undefined, picture: picture.value, name: name.value})
        .subscribe(
          (res) => {
            this.success = 'Updated successfully';
          },
          (err) => (this.error = err)
        );
    }


 onSubmit() {
    if(this.isAddForm) {
      this.restaurantService.createPlat(this.platGallery)
      .subscribe((platGallery: PlatGallery) => this.router.navigate(['/home']))
      console.log(this.platGallery);
    }else {
      this.restaurantService.updatePlatGalleryById(this.platGallery)
      .subscribe(() => this.router.navigate(['/platgallery', this.platGallery.platGallery_id]))
      console.log(this.platGallery);;
      }
  }





  onSubmit() {
    if(this.isAddForm) {
      this.restaurantService.createPlat(this.platGallery)
      .subscribe(platGallery => this.router.navigate(['home']));
      console.log(this.platGallery);
    }
  }
  */







/*

  onSubmit() {
    if(this.isAddForm) {
      this.restaurantService.createPlat(this.platGallery)
      .subscribe(platGallery => this.router.navigate(['home']));
      console.log(this.platGallery);
    }
  }
  */



  


/*onSubmit() {
  console.log('Formulaire envoyé !');
  this.router.navigate(['/plat', this.plat?.id]);
}



 onSubmit() {
    if(this.isAddForm) {
      this.restaurantService.addPlatGallery(this.platGallery)
      .subscribe((platGallery: PlatGallery) => this.router.navigate(['/platgallery/add']))
      console.log(this.platGallery);
    }else {
      this.restaurantService.persistanceData(this.platGallery)
      .subscribe(() => this.router.navigate(['/platgallery', this.platGallery.platGallery_id]))
      console.log(this.platGallery);;
      }
  }





this.platGalery = this.restaurantService.getPlatGaleryList();
this.http.post<PlatGallery>('http://localhost/restaurant-app/api/home/', platGallery, httpOptions
(next => {
      console.log("successful");
    },
    error => {
      console.log("failed submitting");
    });
  }

   if(this.isAddForm) {
      console.log(this.platGallery);
      this.restaurantService.addPlatGallery(this.platGallery)
      .subscribe(platGallery => this.platGallery = platGallery);
      console.log(this.platGallery);

onSubmit() {
    if(this.isAddForm) {
      this.restaurantService.addPlatGallery(this.platGallery)
      .subscribe(platGallery => this.platGallery = platGallery);
      this.router.navigate(['/platgallery', this.platGallery.platGallery_id])
    }else {
      this.restaurantService.persistanceData(this.platGallery)
      .subscribe(() => this.router.navigate(['/platgallery', this.platGallery.id]));
      }





      
  }*/


  /*----base code
  export class PlatFormComponent implements OnInit {

@Input() platGallery: PlatGallery | any;
isAddForm: boolean | undefined;
category: string[] | undefined;



constructor(
  private restaurantService:RestaurantService,
  private router:Router) {}

  ngOnInit(): void {
    this.isAddForm = this.router.url.includes('add');
    this.category = this.restaurantService.getPlatCategoryList();
  }


  showPreview(event: any) {
    let imgFile = event.target.files[0];
    console.log(imgFile)
    let reader = new FileReader();
    reader.onload = () => {
      this.platGallery.picture = reader.result as string;
      console.log(this.platGallery.picture)
    }
    reader.readAsDataURL(imgFile);
  }


  onSubmit() {
    if(this.isAddForm) {
      this.restaurantService.createPlat(this.platGallery)
      .subscribe((platGallery: PlatGallery) => this.router.navigate(['/home']))
      console.log(this.platGallery);
    }else {
      this.restaurantService.updatePlatGalleryById(this.platGallery)
      .subscribe(() => this.router.navigate(['/platgallery', this.platGallery.platGallery_id]))
      console.log(this.platGallery);;
      }
  }*/





  /*--code alter--


  import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlatGallery } from '../plat/platGallery';
import { RestaurantService } from '../restaurant.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-plat-form',
  templateUrl: './plat-form.component.html',
  styles: [` .button {
    margin-top: 20px;
  }
  .bg-image {
    margin-top: 150px;
    margin-bottom: 0px;
  
  }

  `
  ]
})

export class PlatFormComponent implements OnInit {

@Input() platGallery: PlatGallery | any;
platGalleryList: PlatGallery[] = [];
  error = '';
  success = '';




  ngOnInit() {

  }



  addForm: FormGroup | any;

  
  constructor(private fb: FormBuilder, private restaurantService: RestaurantService, private router:Router) {
 
    this.addForm = this.fb.group({
      picture: ['', Validators.required],
      name: ['', Validators.required],
      category_id: ['', Validators.required],
 
    });
   }

  
   resetAlerts() {
    this.error = '';
    this.success = '';
  }

  

  addPlatCat(platGalleryForm: NgForm) {
    this.resetAlerts();

    this.restaurantService.add(this.platGallery).subscribe(
      (res: PlatGallery) => {
        // Update the list of cars
        this.platGalleryList.push(res);

        // Inform the user
        this.success = 'Created successfully';

        // Reset the form
        platGalleryForm.reset();
      },
      (err) => (this.error = err.message)
    );
  }



  addPlat(addForm1: NgForm) {
    if(this.addForm) {
      this.restaurantService.addPlatCategory(addForm1.value.picture, addForm1.value.name, addForm1.value.category_id)
      .subscribe(() => this.router.navigate(['/home']));
    }
  }

  onSubmit() {
    if(this.platGalleryForm) {
      this.restaurantService.add(this.platGallery)
      .subscribe(platGallery => this.router.navigate(['home']));
      console.log(this.platGallery);
    }
  }

  get name() { return this.addForm.get('picture'); }
  get email() { return this.addForm.get('name'); }
  get password() { return this.addForm.get('category_id'); }



  showPreview(event: any) {
    let imgFile = event.target.files[0];
    console.log(imgFile)
    let reader = new FileReader();
    reader.onload = () => {
      this.platGallery.picture = reader.result as string;
      console.log(this.platGallery.picture)
    }
    reader.readAsDataURL(imgFile);
  }

}



*/