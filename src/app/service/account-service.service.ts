import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Account } from '../model/account';
import { Securities } from '../model/Securities';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AccountServiceService {

  private baseUrl: string;
  private accountsUrl: string;
  private accountsByTypeUrl: string;
  private getNetWorthUrl: string;
  private getCashValueUrl: string;
  private getInvestmentValueUrl: string;
  private getAllSecuritiesUrl: string
  
  private putSellSecurityUrl: string
  private postBuySecurityUrl: string

  constructor(private http: HttpClient) {
    this.baseUrl="http://portfolio-project-portfolio-project.namdevops24.conygre.com";
    
    this.accountsByTypeUrl = this.baseUrl+"/type/";
    this.getNetWorthUrl = this.baseUrl+"/netWorth";
    this.getCashValueUrl = this.baseUrl+"/cashAccountSummary";
    this.getInvestmentValueUrl = this.baseUrl+"/investmentAccountSummary";
    this.getAllSecuritiesUrl = this.baseUrl+"/allSecurities";

    this.putSellSecurityUrl = this.baseUrl+"/sellSecurity"
    this.postBuySecurityUrl = this.baseUrl+"/buySecurity"
  }

    public findAll(): Observable<Account[]> {
      return this.http.get<Account[]>(this.baseUrl);
    }

    public findAccountsByType(type:string): Observable<Account[]> {
      return this.http.get<Account[]>(this.accountsByTypeUrl+type);
    }

    public save(account: Account) {
      return this.http.post<Account>(this.accountsUrl, account);
    }
    
    public getNetWorth(): Observable<number>{  
      return this.http.get<number>(this.getNetWorthUrl);
    }

    public getCashValue(): Observable<number>{
      return this.http.get<number>(this.getCashValueUrl);
    }     
    
    public getInvestmenthValue(): Observable<number>{
      return this.http.get<number>(this.getInvestmentValueUrl);
    } 

    public getAccountById(id:string):Observable<Account>{
      return this.http.get<Account>(this.baseUrl+"/"+id);
    }

    public getAllSecurities(): Observable<Securities[]>{
      return this.http.get<Securities[]>(this.getAllSecuritiesUrl);
    }

    public putSellSecurity(obj:Securities){
      let putBody = {
        'account_id': obj.account_id,
        'cash_account_id': obj.cash_account,
        'symbol': obj.symbol,
        'holdings': obj.holdings
      }
      return this.http.put<any>(this.putSellSecurityUrl, putBody)
    }

    public postBuySecurity(obj:Securities){
      let postBody = {
        'account_id': obj.account_id,
        'cash_account_id': obj.cash_account,
        'symbol': obj.symbol,
        'holdings': obj.holdings
      }       
      return this.http.post<any>(this.postBuySecurityUrl, postBody)
    }
}
