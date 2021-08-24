import { Component, OnInit } from '@angular/core';
import {Account} from '../model/account';
import { AccountServiceService } from '../service/account-service.service';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.css']
})
export class AccountsListComponent implements OnInit {
  accounts: Account[]=[new Account(), new Account()];
  accountTypes:string[]=["cash","investment"];
  cashAccounts:Account[]=[];
  investmentAccounts:Account[]=[];





  constructor(private accountsService: AccountServiceService) { }

  ngOnInit() {
    this.accountsService.findAll()
    .subscribe(data=>{
      this.accounts=data;
      this.sortAccounts();
      // this.cashAccounts=[];
      // this.investmentAccounts=[];

    }),
    error=>{
      console.log("got error",error);
    }


  }

  public sortAccounts(){
    this.accounts.forEach(account => {
      if(account.type ===this.accountTypes[0]){
        console.log("cash",account);
        this.cashAccounts.push( account);
        
      }
      if(account.type ===this.accountTypes[1]){
        console.log("investment",account);
        this.investmentAccounts.push(account);
        
      }
    });

  }

}

