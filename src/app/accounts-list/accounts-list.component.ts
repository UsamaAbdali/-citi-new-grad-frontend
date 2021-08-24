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

    //Set account list 
    this.accountsService.findAll()
    .subscribe(data=>{
      this.accounts=data;

      data.forEach(acc => {

        // this.netWorth += acc['amount']

        if (acc["type"] == "investment"){
          this.investmentAccounts.push(acc)
        } else {
          this.cashAccounts.push(acc)
        }

      });

    }),
    error=>{
      console.log("ERROR: Couldn't set account list ",error);
    }

    //Set network
    this.accountsService.getNetWorth()
    .subscribe(data=>{
      this.netWorth=data;
    }),
    error=>{
      console.log("ERROR: Couldn't set Networth",error);
    }




  }

}
