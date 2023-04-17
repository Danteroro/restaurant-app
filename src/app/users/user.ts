export class User {

  user_id: number | undefined;
  name: string ;
  surname: string;
  email: string;
  password: string;
  role: string;


  constructor(
    name: string = 'Mat',
    surname: string = 'COL',
    email: string = '',
    password: string = '',
    role: string = ''
    
  ) {
    this.name = name;
    this.surname = name;
    this.email = email;
    this.password = password;
    this.role = role;
   
  }

  /*export const USERS = [
     {
        id: 1,
        name: "Mathieu",
        surname: "PAUL",
        email: "Mathieu@mail.com",
        password: "123",
        role: "admin"
    },

    {
        id: 2,
        name: "Alexandra",
        surname: "CANE",
        email: "alexandra@mail.com",
        password: "abc",
        role: "client"
    },


]*/
    


}
    