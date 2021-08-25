import { Component, OnInit } from '@angular/core';
// import {Account} from '../model/account';
import { Securities } from '../model/Securities';
// import { AccountServiceService } from '../service/account-service.service';
import { SercuritiesService } from '../service/sercurities.service';



@Component({
  selector: 'app-market-movers',
  templateUrl: './market-movers.component.html',
  styleUrls: ['./market-movers.component.css']
})
export class MarketMoversComponent implements OnInit {

  topGainersSecurities = [];
  topLosersSecurities = [];
  // securitiesService: SercuritiesService;


  constructor(private securitiesService: SercuritiesService) { }
  // constructor() { }


  ngOnInit() {
    this.setTopGainers();
    this.setTopLosers();

  }

  setTopGainers(){
    this.securitiesService.getTopGainers().subscribe(data =>{
      data.forEach(security => {
        this.topGainersSecurities.push(security);
      });
    }),
    error =>{
      console.log("ERROR: Couldn't get Top 5 Gainers",error);
    }
    console.log("topGainersSecurities",this.topGainersSecurities);
  }

  setTopLosers(){
    this.securitiesService.getTopLosers().subscribe(data =>{
      data.forEach(security => {
        this.topLosersSecurities.push(security);
      });
    }),
    error =>{
      console.log("ERROR: Couldn't get Top 5 Losers",error);
    }
    console.log("topLosersSecurities",this.topLosersSecurities);
  }

  securityChangeCalculator(security:Securities):number{
    // Calculate percentage change
    var percentChange=((security.current_cost-security.closing_cost)/security.closing_cost)*100;
    
    //Round to 3 decimals
    percentChange=Math.round(percentChange * 1000) / 1000;
    return percentChange;
  }

}
