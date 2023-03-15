
export class Menu {
    id: number | undefined;
    title: string | undefined;
    formule: string | undefined;
    description: string | undefined;

constructor(
        title: string = 'menu-xxxx',
        formule: string = 'Midi-Soir',
        description: string = 'Composer de :'
        
      ) {
        this.title = title;
        this.formule = formule;
        this.description = description;
    }
  
}