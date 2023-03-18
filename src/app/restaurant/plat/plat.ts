
export class Plat {
    id: number | undefined;
    picture: string ;
    name: string ;
    category: string;

constructor(
        name: string = 'mon plat',
        picture: string = 'assets/AdobeStock_399075641_Preview.jpeg',
        category: '...'
        
      ) {
        this.name = name;
        this.picture = picture;
        this.category = category
    }
  
}