
export class Menu {
    id: number | undefined;
    name: string | undefined;
    picture: string | undefined;
    description: string | undefined;

constructor(
        name: string = 'menu-xxxx',
        picture: string = '/fond-cuisine.jpeg',
        description: string = 'Menu composer de :'
        
      ) {
        this.name = name;
        this.picture = picture;
        this.description = description;
    }
  
}