import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Account } from '../model/account';
import { Securities } from '../model/Securities';
import { AccountServiceService } from '../service/account-service.service';

@Component({
  selector: 'app-manage-accounts',
  templateUrl: './manage-accounts.component.html',
  styleUrls: ['./manage-accounts.component.css']
})
export class ManageAccountsComponent implements OnInit {

  accountId:number;
  accountName:string;
  allAccounts:Account[]=[];
  cashAccounts:Account[] = [];
  investmentAccounts:Account[] = [];
  

  constructor(private accountsService: AccountServiceService) { }

  ngOnInit() {
    this.setAccounts();

  }


  setAccounts(){
    //Set Cash Accounts
    this.accountsService.findAccountsByType("cash")
    .subscribe(data=>{
      data.forEach(acc => {
        this.cashAccounts.push(acc);
      });

    }),
    error=>{
      console.log("ERROR: Couldn't set Cash Accounts",error);
    }

    //Set investment accounts
    this.accountsService.findAccountsByType("investment")
    .subscribe(data=>{
      data.forEach(acc => {
        this.investmentAccounts.push(acc);
      });
    }),
    error=>{
      console.log("ERROR: Couldn't set Investment Accounts",error);
    }

    // Set all Accounts
    this.accountsService.findAll().subscribe(data=>{
      data.forEach(acc => {
        this.allAccounts.push(acc);
      })
      console.log(this.allAccounts);
    }),
    error=>{
      console.log("ERROR: Couldn't set allAccounts",error);
    }



  }

}
