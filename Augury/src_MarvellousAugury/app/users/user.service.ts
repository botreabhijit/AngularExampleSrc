import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable()
export class UserService 
{

  constructor() { }

  getUsers(): User[] {
    return [
      {
        id: 1,
        first: 'Abhijit',
        last: 'Khairnar'
      },
      {
        id: 2,
        first: 'Pooja',
        last: 'Khairnar'
      },
      {
        id: 3,
        first: 'Madhavi',
        last: 'Khairnar'
      }
    ]
  }
}
