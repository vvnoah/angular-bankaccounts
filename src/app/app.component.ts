import { Component } from '@angular/core';
import { AccountService } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor(private account:AccountService){}

  title = 'angular-bankaccounts';
  users = ["Killian", "Nicky", "Martijn"];
  balance = this.account.balance;

  deposit(){
    this.account.balance += 5;
    this.balance = this.account.balance;
  }

  withdraw(){
    this.account.balance -= 5;
    this.balance = this.account.balance;
  }
}
