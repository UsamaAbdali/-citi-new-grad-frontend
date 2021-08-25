import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Account } from '../model/account';
import { HistoryModel } from '../model/history';
import { Securities } from '../model/Securities';
import { AccountServiceService } from '../service/account-service.service';
HistoryModel
@Component({
  selector: 'app-account-overview',
  templateUrl: './account-overview.component.html',
  styleUrls: ['./account-overview.component.css']
})
export class AccountOverviewComponent implements OnInit {

  constructor(private accountsService: AccountServiceService, private activedRoute:ActivatedRoute) { 
  }
  currAccount:Account;
  securities:Securities[]=[];
  history:HistoryModel[]=[new HistoryModel("2021-08-25", -50),new HistoryModel("2021-08-25", 100), new HistoryModel("2021-08-24", 25)];
  accountId:number=0;
  isInvestmentAccount:boolean=false;
  private ngSetAccountInitial = new Subscription;
  private ngSetAccountForParams = new Subscription;


  ngOnInit() {
    this.accountId = this.activedRoute.snapshot.params['id'];
    // Create a temp account to avoid issues while waiting for get request.
    this.currAccount=new Account(-1,-1,"cash","testAccount", this.securities, this.history);
    this.setAccount();

    this.ngSetAccountForParams =this.activedRoute.paramMap.subscribe(params => {
      this.accountId = +params.get('id');
      this.setAccount();
    });
  }

  setAccount(){
    this.ngSetAccountInitial=this.accountsService.getAccountById(""+this.accountId)
    .subscribe(data=>{
      this.currAccount=data;
      this.isInvestmentAccount=this.currAccount.type==='investment'
      console.log("curr account",this.currAccount);
    }),
    error=>{
      console.log("ERROR: Couldn't set Account by Id",error);
    }
  }
  ngOnDestroy() {
    this.ngSetAccountInitial.unsubscribe();
    this.ngSetAccountForParams.unsubscribe();
}


}
