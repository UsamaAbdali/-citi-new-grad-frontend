import { Component, OnInit } from '@angular/core';
import { Securities } from '../model/Securities';

@Component({
  selector: 'app-account-overview',
  templateUrl: './account-overview.component.html',
  styleUrls: ['./account-overview.component.css']
})
export class AccountOverviewComponent implements OnInit {

  constructor() { 
  }

  securities:Securities[];
  history:[];
  accountId:number;
  accountName:string;

  // :number;
  ngOnInit() {

  }

}
