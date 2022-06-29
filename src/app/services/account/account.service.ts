import { Injectable } from '@angular/core';

import { Account } from './account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private user!: Account;
  private users: Account[] = [];

  constructor() {
    // Main user
    this.user = new Account(
      'sdksySd23H',
      'Vineet Kori',
      'vineetkori',
      'https://i.imgur.com/MaGtVJW.jpeg'
    );

    // Random users for suggested section
    this.users.push(new Account('AdfDi34Ois', 'Vineet Kori', 'vineetkori', 'https://i.imgur.com/MaGtVJW.jpeg'));
    this.users.push(new Account('nSb4H7tRsd', 'Vineet Kori', 'vineetkori', 'https://i.imgur.com/MaGtVJW.jpeg'));
    this.users.push(new Account('sdK83hGbse', 'Vineet Kori', 'vineetkori', 'https://i.imgur.com/MaGtVJW.jpeg'));
    this.users.push(new Account('', 'Vineet Kori', 'vineetkori', 'https://i.imgur.com/MaGtVJW.jpeg'));
    this.users.push(new Account('', 'Vineet Kori', 'vineetkori', 'https://i.imgur.com/MaGtVJW.jpeg'));
  }

  getUser(): Account {
    return this.user;
  }

  getUsers(): Account[] {
    return this.users;
  }
}
