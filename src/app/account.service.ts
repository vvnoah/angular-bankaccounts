import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  balance:number = 0;

  getBalance(){
    return this.balance;
  }

  setBalance(value:number){
    this.balance = value;
  }
}
