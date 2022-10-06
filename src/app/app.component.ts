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
    {userName:"Killian", userBalance: 0},
    {userName:"Martijn", userBalance: 0},
    {userName:"Nicky", userBalance: 0}
  ];

  
  item:any;
  updateBalance(item:any){
    let index = this.users.indexOf(item);
    item.userBalance += 5;
    this.users[index] = item;
  }

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
