
export class User {
    id: number | undefined;
    name: string ;
    surname: string;
    email: string;
    password: string;
    role: string;

constructor(
        name: string = 'Thomas',
        surname: string = 'BAR',
        email: string = 'thomas@mail.com',
        password: string = '123',
        role: string = 'admin',
        
      ) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.password = password;
        this.role = role;
    
    }
}