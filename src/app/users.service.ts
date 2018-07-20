import { Injectable } from '@angular/core';
import { USERS } from './mock-users';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: User[] = USERS;

  constructor() { }

  public getAllUsers(): User[] {
    return this.users;
  }
}
