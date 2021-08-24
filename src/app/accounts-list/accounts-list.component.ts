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
      data.forEach(acc => {
        this.cashAccounts.push(acc)
      });
    }),
    error=>{
      console.log("ERROR: Couldn't set Cash Accounts",error);
    }

    //Set investment accounts
    this.accountsService.findAccountsByType("investment")
    .subscribe(data=>{
      data.forEach(acc => {
        this.investmentAccounts.push(acc)
      });
    }),
    error=>{
      console.log("ERROR: Couldn't set Investment Accounts",error);
    }
  }
}
