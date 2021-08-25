import { Component, OnInit, AfterViewInit, ElementRef, ViewChild} from '@angular/core';
import { Chart } from 'Chart.js';
import { AccountServiceService } from '../service/account-service.service';


@Component({
  selector: 'app-summary-overview',
  templateUrl: './summary-overview.component.html',
  styleUrls: ['./summary-overview.component.css']
})
export class SummaryOverviewComponent implements OnInit {
  doughnutChart:any;
  netWorth:number = 0;
  cashValue:number = 42;
  investmentValue:number = 42;
  
  constructor(private accountsService: AccountServiceService) { }

  ngOnInit() {
    this.setNetWorth();
    this.setCashValue();
    this.setInvestmentValue();
  }

  ngAfterViewInit() {
  }

  setNetWorth(){
    this.accountsService.getNetWorth()
    .subscribe(data=>{
      this.netWorth=data;
    }),
    error=>{
      console.log("ERROR: Couldn't set NetWorth",error);
    }
  }

  setCashValue(){
    this.accountsService.getCashValue()
    .subscribe(data=>{
      this.cashValue=data;
      this.doughnutChartMethod();
    }),
    error=>{
      console.log("ERROR: Couldn't set CashValue",error);
    }
  }

  setInvestmentValue(){
    this.accountsService.getInvestmenthValue()
    .subscribe(data=>{
      this.investmentValue=data;
      this.doughnutChartMethod();
    }),
    error=>{
      console.log("ERROR: Couldn't set InvestmentValue",error);
    }
  }

  doughnutChartMethod() {
    Chart.defaults.global.defaultFontSize = 18;
    this.doughnutChart = new Chart('summaryChart', {
      type: 'doughnut',
      data: {
        labels: ['Cash', 'Investment'],
        datasets: [{
          label: 'money',
          data: [this.cashValue, this.investmentValue],
          backgroundColor: [
            '#36A2EB',
            '#FFCE56'
          ],
          hoverBackgroundColor: [
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)'
          ]
        }]
      },
      options: {
        tooltips: {enabled: false},
        hover: {mode: null}
      }
    });
  }

}
