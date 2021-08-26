import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { AccountsListComponent } from './accounts-list/accounts-list.component';
import { AccountServiceService } from './service/account-service.service';
import { SercuritiesService } from './service/sercurities.service';
import { MarketMoversComponent } from './market-movers/market-movers.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SummaryOverviewComponent } from './summary-overview/summary-overview.component';
import { AccountOverviewComponent } from './account-overview/account-overview.component';
import { ManageAccountsComponent } from './manage-accounts/manage-accounts.component'; 
import { InvestmentOverviewComponent } from './investment-overview/investment-overview.component';
import { HistoryChartComponent } from './history-chart/history-chart.component'; 
import { HistoryService } from './service/history.service';
import { HistorySummaryComponent } from './history-summary/history-summary.component';


// import {  DxPieChartModule, DxSelectBoxModule  } from 'devextreme-angular';

@NgModule({
  declarations: [
    AppComponent,
    AccountsListComponent,
    MarketMoversComponent,
    HomePageComponent,
    PageNotFoundComponent,
    SummaryOverviewComponent,
    AccountOverviewComponent,
    ManageAccountsComponent,
    InvestmentOverviewComponent,
    HistoryChartComponent,
    HistorySummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // DxPieChartModule, 
    // DxSelectBoxModule
  ],
  providers: [AccountServiceService, SercuritiesService, HistoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
