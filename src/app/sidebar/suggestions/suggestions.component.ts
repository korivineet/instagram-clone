import { Component, OnInit } from '@angular/core';

import { Account } from './../../services/account/account.model';
import { AccountService } from 'src/app/services/account/account.service';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss']
})
export class SuggestionsComponent implements OnInit {

  users: Account[] = [];

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.users = this.accountService.getUsers();
  }

}
