import { Component, OnInit } from '@angular/core';
import {Account} from '../model/account';
import { AccountServiceService } from '../service/account-service.service';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.css']
})
export class AccountsListComponent implements OnInit {
  accounts: Account[];
  netWorth: number = 0;
  cashValue:number=0;
  investmentValue:number=0;

  cashAccounts = [];
  investmentAccounts = [];

  constructor(private accountsService: AccountServiceService) { }

  ngOnInit() {
    this.setNetWorth();
    this.setAccounts();
  }

  setNetWorth(){
    this.accountsService.getNetWorth()
    .subscribe(data=>{
      this.netWorth=data;
    }),
    error=>{
      console.log("ERROR: Couldn't set NetWorth",error);
    }
  }

  setAccounts(){
    //Set Cash accounts
    this.accountsService.findAccountsByType("cash")
    .subscribe(data=>{
      this.cashValue=0;
      data.forEach(acc => {
        this.cashValue+=acc.amount
        this.cashAccounts.push(acc)
      });
      this.cashValue=Math.round(this.cashValue * 100) / 100
    }),
    error=>{
      console.log("ERROR: Couldn't set Cash Accounts",error);
    }

    //Set investment accounts
    this.accountsService.findAccountsByType("investment")
    .subscribe(data=>{
      this.investmentValue=0;
      data.forEach(acc => {
        this.investmentValue+=acc.amount
        this.investmentAccounts.push(acc)
      });
      this.investmentValue=Math.round(this.investmentValue * 100) / 100
    }),
    error=>{
      console.log("ERROR: Couldn't set Investment Accounts",error);
    }
  }

  
}
