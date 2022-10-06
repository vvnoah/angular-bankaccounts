import { Component } from '@angular/core';
import { __values } from 'tslib';
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
  
  // Handling payments
  balance = this.account.balance;

  updateBalance(target:any, amount:number, paymentOperation:string){
    if(paymentOperation == "deposit"){
      // Updating user
      let index = this.users.indexOf(target);
      target.userBalance -= amount;
      this.users[index] = target;

      // Updating joint account
      this.account.balance += amount;
      this.balance = this.account.balance;
    } else if (paymentOperation == "withdraw"){
      // Updating user
      let index = this.users.indexOf(target);
      target.userBalance += amount;
      this.users[index] = target;

      // Updating joint account
      this.account.balance -= amount;
      this.balance = this.account.balance;
    } else {
    }
  }

  withdraw(){
    this.account.balance -= 5;
    this.balance = this.account.balance;
  }
}
