import { Component, OnInit } from '@angular/core';

import { Account } from './../../services/account/account.model';
import { AccountService } from './../../services/account/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  user!: Account;
  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.user = this.accountService.getUser();
  }

}
