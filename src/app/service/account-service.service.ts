import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Account } from '../model/account';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AccountServiceService {

  private accountsUrl: string;

  constructor(private http: HttpClient) {
    this.accountsUrl = 'http://portfolio-project-portfolio-project.namdevops24.conygre.com/account';
  }

    public findAll(): Observable<Account[]> {
      return this.http.get<Account[]>(this.accountsUrl);
    }

    public save(account: Account) {
      return this.http.post<Account>(this.accountsUrl, account);
    }

}
