import { Component, OnInit } from '@angular/core';

import { Account } from '../services/account/account.model';
import { AccountService } from '../services/account/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user!: Account;
  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.user = this.accountService.getUser();
  }

}
