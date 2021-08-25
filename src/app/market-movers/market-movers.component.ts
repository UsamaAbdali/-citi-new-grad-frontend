import { Component, OnInit } from '@angular/core';
// import {Account} from '../model/account';
// import { Securities } from '../model/Securities';
import { AccountServiceService } from '../service/account-service.service';
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
    
  }

  setTopGainers(){
    this.securitiesService.getTopFiveGainers().subscribe(data =>{
      // this.topGainersSecurities=
      data.forEach(security => {
        this.topGainersSecurities.push(security);
      });
    }),
    error =>{
      console.log("ERROR: Couldn't get Top 5 Gainers",error);
    }
  }

}
