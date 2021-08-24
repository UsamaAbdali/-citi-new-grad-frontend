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
    this.accountsService.findAll()
    .subscribe(data=>{
      this.accounts=data;

      data.forEach(acc => {

        this.netWorth += acc['amount']

        if (acc["type"] == "investment"){
          this.investmentAccounts.push(acc)
        } else {
          this.cashAccounts.push(acc)
        }

      });

    }),
    error=>{
      console.log("got error",error);
    }


  }

}
