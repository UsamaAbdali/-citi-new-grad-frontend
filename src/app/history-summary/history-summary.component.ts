import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../service/history.service';

@Component({
  selector: 'app-history-summary',
  templateUrl: './history-summary.component.html',
  styleUrls: ['./history-summary.component.css']
})
export class HistorySummaryComponent implements OnInit {

 
  private weekCash;
  private weekInvestment;
  private monthCash;
  private monthInvestment;
  private yearCash;
  private yearInvestment;

  constructor(private historyService:HistoryService) { }

  ngOnInit() {
    this.retrieveHistorySummary();
  }

  retrieveHistorySummary(){
    this.historyService.getGenericData()
    .subscribe(data=>{
      console.log(data);
      this.weekCash=data['Week Cash'];
      this.weekInvestment=data['Week Investment'];
      this.monthCash=data['Month Cash'];
      this.monthInvestment=data['Month Investment'];
      this.yearCash=data['Year Cash'];
      this.yearInvestment=data['Year Investment'];
    }),
    error=>{
      console.log("ERROR: Couldn't retrieve data")
    }
 
  }
}
