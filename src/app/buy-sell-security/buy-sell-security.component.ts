import { Component, Output, OnInit } from '@angular/core';
import { AccountServiceService } from '../service/account-service.service';
import { Securities } from '../model/Securities';

@Component({
  selector: 'app-buy-sell-security',
  templateUrl: './buy-sell-security.component.html',
  styleUrls: ['./buy-sell-security.component.css']
})
export class BuySellSecurityComponent implements OnInit {
  
  cashAccounts:any;
  investmentAccounts:any;
  action:string;
  req = new Securities();

  constructor(private accountsService: AccountServiceService) { }

  ngOnInit() {
    this.getAccounts()
  }

  getAccounts(){
    //Set Cash Accounts
    this.accountsService.findAccountsByType("cash")
    .subscribe(data=>{
      this.cashAccounts = data
    }),
    error=>{
      console.log("ERROR: Couldn't set Cash Accounts",error);
    }

    this.accountsService.findAccountsByType("investment")
    .subscribe(data=>{
      this.investmentAccounts = data
    }),
    error=>{
      console.log("ERROR: Couldn't set Investment Accounts",error);
    }
  }

  handleRequest() { 

    if (this.action == "sell"){
      this.accountsService.putSellSecurity(this.req)
      .subscribe(data=>{}),
      error=>{
        console.log("ERROR: ",error);
      }
    }

    if (this.action == "buy"){
      console.log(this.req)
      this.accountsService.postBuySecurity(this.req)
      .subscribe(data=>{}),
      error=>{
        console.log("ERROR: ",error);
      }
    }

  }

}
