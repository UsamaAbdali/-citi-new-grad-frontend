import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  securities:Securities[];
  history:HistoryModel[];
  accountId:number=0;
  // accountName:string;

  ngOnInit() {
    this.accountId = this.activedRoute.snapshot.params['id'];
  }

  setAccount(){
    
  }

}
