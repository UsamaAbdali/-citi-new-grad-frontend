import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Securities } from '../model/Securities';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SercuritiesService {
  
  private baseUrl: string;
  private topFiveGainsUrl: string;
  private topFiveLosersUrl: string;

  constructor(private http: HttpClient) { 
    this.baseUrl="http://portfolio-project-portfolio-project.namdevops24.conygre.com"; 
    this.topFiveGainsUrl = this.baseUrl+"/dailyGainers";
    this.topFiveLosersUrl = this.baseUrl+"/dailyLosers";
  }

  public getTopGainers(): Observable<Securities[]> {
    return this.http.get<Securities[]>(this.topFiveGainsUrl);
  }

  public getTopLosers(): Observable<Securities[]> {
    return this.http.get<Securities[]>(this.topFiveLosersUrl);
  }

}
