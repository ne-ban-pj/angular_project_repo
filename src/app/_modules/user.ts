export interface User {
  id: string;
  name: string;
  surname: string;
  city: string;
  country: string;
  email: string;
  password?: string;
  role?:string
}