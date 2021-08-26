import { Component, OnInit } from '@angular/core';
import { Chart } from 'Chart.js';
import { AccountServiceService } from '../service/account-service.service';
import { draw } from 'patternomaly'

@Component({
  selector: 'app-investment-overview',
  templateUrl: './investment-overview.component.html',
  styleUrls: ['./investment-overview.component.css']
})
export class InvestmentOverviewComponent implements OnInit {

  doughnutChart:any;
  allLabels = [];
  allAmounts = [];
  numberOfSecurities = 0;
  investmentValue = 0;

  constructor(private accountsService: AccountServiceService) { }

  ngOnInit() {
    this.setInvestmentValue()
    this.setInvestmentLists()
  }
  
  setInvestmentValue(){
    this.accountsService.getInvestmenthValue()
    .subscribe(data=>{
      this.investmentValue=data;
    }),
    error=>{
      console.log("ERROR: Couldn't set InvestmentValue",error);
    }
  }

  setInvestmentLists(){
    let count = 0
    let current = 0
    let updated = 0
    this.accountsService.getAllSecurities()
    .subscribe(data=>{
      
      data.sort(function (a, b) {
        return -(a['holdings']*a['current_cost'] - b['holdings']*b['current_cost']);
      });

      this.numberOfSecurities = data.length

      data.forEach(item => {
        this.doughnutChart.destroy();
        if (count < 5){
          this.allLabels.push(item['symbol']);
          this.allAmounts.push((item['holdings']*item['current_cost']).toFixed(2))
        } else if (count == 5) {
          this.allLabels.push('Other')
          this.allAmounts.push((item['holdings']*item['current_cost']).toFixed(2))
        } else {
          current = parseFloat(this.allAmounts.pop())
          updated = current + parseFloat((item['holdings']*item['current_cost']).toFixed(2))
          this.allAmounts.push(updated)
        }
        count += 1
        this.doughnutChartMethod();
      });
      console.log(data)
    }),
    error=>{
      console.log("ERROR: Couldn't set lists of Securities",error);
    }
    this.doughnutChartMethod();
  }

  doughnutChartMethod() {
    Chart.defaults.global.defaultFontSize = 18;
    this.doughnutChart = new Chart('investmentSummaryChart', {
      type: 'doughnut',
      data: {
        labels: this.allLabels,
        datasets: [{
          label: 'money',
          data: this.allAmounts,
          backgroundColor: [
          draw('ring', '#2ecc71'),
          draw('diagonal', '#3498db'),
          draw('triangle', '#9b59b6'),
          draw('weave', '#f1c40f'),
          draw('box','#e74c3c'),
          draw('zigzag','#95a5a6')]
        }]
      },
      options: {
        tooltips: {enabled: false},
        hover: {mode: null}
      }
    });
  }

}
