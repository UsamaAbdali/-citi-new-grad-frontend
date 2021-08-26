import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HistoryData } from '../model/HistoryData';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HistoryService {
  private baseUrl: string;
  private chartDataUrl: string;
  private genericHistoryUrl: string;

  constructor(private http: HttpClient) { 
    this.baseUrl="http://portfolio-project-portfolio-project.namdevops24.conygre.com";
    this.chartDataUrl=this.baseUrl+"/investmentYearHistory";
    this.genericHistoryUrl=this.baseUrl+"/cashAndInvestmentHistory";
  }

  public getHistoryData(): Observable<HistoryData[]> {
    return this.http.get<HistoryData[]>(this.chartDataUrl);
  }

  public getGenericData(): Observable<Map<string,number>>{
    return this.http.get<Map<string,number>>(this.genericHistoryUrl);
  }

}
