
export class Plat {
    id: number | undefined;
    picture: string | undefined;
    name: string | undefined;
    category: string | undefined;

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