import { Component, OnInit } from '@angular/core';
import { Chart } from 'Chart.js';
import { HistoryService } from '../service/history.service';
import { draw } from 'patternomaly'


@Component({
  selector: 'app-history-chart',
  templateUrl: './history-chart.component.html',
  styleUrls: ['./history-chart.component.css']
})

export class HistoryChartComponent implements OnInit {

  lineChart:any;
  allLabels =[];
  allAmounts=[];

  
  constructor(private historyService:HistoryService) { }


  ngOnInit() {
    this.setDataLists()
  }

  setDataLists(){
    this.historyService.getHistoryData()
    .subscribe(data=>{
      console.log("gettingData")
      var count=0;
      data.forEach(item=>{
        count+=1;
        this.lineChart.destroy();
        if(count%2==0){
         this.allLabels.push(item['date'].toString().split("T")[0]);
        }else{
          this.allLabels.push("");
        }
        this.allAmounts.push(item['value']);
        this.lineChartMethod();
      });
      
    }),
    error=>{
      console.log("ERROR: could not retrieve history data", error);
    }
    this.lineChartMethod();
  }

  lineChartMethod(){
    Chart.defaults.global.defaultFontSize=18;
    this.lineChart= new Chart('historyInfoChart',{
      type: 'line',

      data:{
        labels:this.allLabels,
        datasets:[{
          label: "Investment Growth",
          data: this.allAmounts,
          fill: false,
          borderColor: 'rgb(75, 192, 230)',
          tension: 0.1
        }]
      },
      xAxes: [{
        type: 'time',
        ticks: {
            autoSkip: true,
            maxTicksLimit: 20
        }
    }],
    options: {
      tooltips: {enabled: false},
      hover: {mode: null},

    }

    });


  }

}
