export class PlatGallery {
    platGallery_id: number | undefined;
    picture: string ;
    name: string ;
    category: string[];

    constructor(
      name: string = 'mon plat',
      picture: string = '/assets/AdobeStock_399075641_Preview.jpeg',
      category: string[] = ['...']
      
    ) {
      this.name = name;
      this.picture = picture;
      this.category = category;
  }
  
}

/*
export const PLATGALLERYLIST = [
    {
        id: 1,
        picture: "assets/plat-galery-1.jpeg",
        name: "Fromage Feuille",
        category: ["Plat"]
        
    },

    {
        id: 2,
        picture: "assets/plat-galery-2.jpeg",
        name: "Crevette Pâtes",
        category: ["Plat"]
        
        
        
    },
    
    {
        id: 3,
        picture: "assets/plat-galery-4.jpeg",
        name: "Pomme de terre Carottes",
        category: ["Plat"]
        
        
    },

    {
        id: 4,
        picture: "assets/entree5.jpeg",
        name: "Salade fine",
        category: ["Plat"]
        
        
    },

    {
        id: 5,
        picture: "assets/plat-galery-6.jpeg",
        name: "Sauce tomate",
        category: ["Plat"]
        
        
    },

    {
        id: 6,
        picture: "assets/plat-galery-8.jpeg",
        name: "Nouille",
        category: ["Plat"]
        
        
    }, 

    {
        id: 7,
        picture: "assets/plat6.jpeg",
        name: "Crevette ronde",
        category: ["Plat"]
        
        
    },

    {
        id: 8,
        picture: "assets/dessert4.jpeg",
        name: "Tarte fruit",
        category: ["Dessert"]
        
        
    },

  
];*/