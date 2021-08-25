import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Account } from '../model/account';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AccountServiceService {

  private baseUrl: string;
  private accountsUrl: string;
  private accountsByTypeUrl: string;
  private getNetWorthUrl: string;


  

  constructor(private http: HttpClient) {
    this.baseUrl="http://portfolio-project-portfolio-project.namdevops24.conygre.com";
    
    this.accountsByTypeUrl = this.baseUrl+"/type/";
    this.getNetWorthUrl = this.baseUrl+"/netWorth";

  }

    public findAll(): Observable<Account[]> {
      return this.http.get<Account[]>(this.baseUrl);
    }

    public findAccountsByType(type:string): Observable<Account[]> {
      console.log("URL:",this.accountsByTypeUrl+type)
      return this.http.get<Account[]>(this.accountsByTypeUrl+type);
    }

    public save(account: Account) {
      return this.http.post<Account>(this.accountsUrl, account);
    }
    public getNetWorth():Observable<number>{
      
      return this.http.get<number>(this.getNetWorthUrl);
    }



}
