import { Injectable } from '@angular/core';

import { Account } from './account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  user!: Account;
  users: Account[] = [];

  constructor() { 
    this.user = new Account(
      'Vineet Kori',
      'vineetkori',
      'https://i.imgur.com/MaGtVJW.jpeg'
    );

    this.users.push(new Account('Vineet Kori', 'vineetkori', 'https://i.imgur.com/MaGtVJW.jpeg'));
    this.users.push(new Account('Vineet Kori', 'vineetkori', 'https://i.imgur.com/MaGtVJW.jpeg'));
    this.users.push(new Account('Vineet Kori', 'vineetkori', 'https://i.imgur.com/MaGtVJW.jpeg'));
    this.users.push(new Account('Vineet Kori', 'vineetkori', 'https://i.imgur.com/MaGtVJW.jpeg'));
    this.users.push(new Account('Vineet Kori', 'vineetkori', 'https://i.imgur.com/MaGtVJW.jpeg'));
  }

  getUser(): Account {
    return this.user;
  }

  getUsers(): Account[] {
    return this.users;
  }
}
