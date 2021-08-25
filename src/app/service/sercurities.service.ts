import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Securities } from '../model/Securities';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SercuritiesService {
  
  private baseUrl: string;
  private topFiveGainsUrl: string;

  // http://portfolio-project-portfolio-project.namdevops24.conygre.com/account/dailyGainers

  constructor(private http: HttpClient) { 
    this.baseUrl="http://portfolio-project-portfolio-project.namdevops24.conygre.com"; 
    this.topFiveGainsUrl = this.baseUrl+"/account/dailyGainers";
  }

  public getTopFiveGainers(): Observable<Securities[]> {
    return this.http.get<Securities[]>(this.topFiveGainsUrl);
  }

}