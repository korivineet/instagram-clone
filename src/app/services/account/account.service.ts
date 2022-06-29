import { Injectable } from '@angular/core';

import { Account } from './account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private user!: Account;
  private suggestedUsers: Account[] = [];

  constructor() {
    // Main user
    this.user = new Account(
      'sdksySd23H',
      'Vineet Kori',
      'vineetkori',
      'https://i.imgur.com/MaGtVJW.jpeg'
    );

    this.suggestedUsers.push(new Account('sdksySd23H', 'Vineet Kori', 'vineetkori', 'https://i.imgur.com/MaGtVJW.jpeg'));
    this.suggestedUsers.push(new Account('sdksySd23H', 'Vineet Kori', 'vineetkori', 'https://i.imgur.com/MaGtVJW.jpeg'));
    this.suggestedUsers.push(new Account('sdksySd23H', 'Vineet Kori', 'vineetkori', 'https://i.imgur.com/MaGtVJW.jpeg'));
    this.suggestedUsers.push(new Account('sdksySd23H', 'Vineet Kori', 'vineetkori', 'https://i.imgur.com/MaGtVJW.jpeg'));
    this.suggestedUsers.push(new Account('sdksySd23H', 'Vineet Kori', 'vineetkori', 'https://i.imgur.com/MaGtVJW.jpeg'));
  }

  getUser(): Account {
    return this.user;
  }

  getSuggestedUsers(): Account[] {
    return this.suggestedUsers.slice();
  }
}
