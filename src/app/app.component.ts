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
  
  users = [
    {"userName" : "Killian", "userBalance" : 0},
    {"userName" : "Nicky", "userBalance" : 0},
    {"userName" : "Martijn", "userBalance" : 0}
  ];
  
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
