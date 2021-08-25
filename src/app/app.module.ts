import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { AccountsListComponent } from './accounts-list/accounts-list.component';
import { AccountServiceService } from './service/account-service.service';
import { SercuritiesService } from './service/sercurities.service';
import { CashFlowComponent } from './cash-flow/cash-flow.component';
import { MarketMoversComponent } from './market-movers/market-movers.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// import {  DxPieChartModule, DxSelectBoxModule  } from 'devextreme-angular';

@NgModule({
  declarations: [
    AppComponent,
    AccountsListComponent,
    CashFlowComponent,
    MarketMoversComponent,
    HomePageComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // DxPieChartModule, 
    // DxSelectBoxModule
  ],
  providers: [AccountServiceService, SercuritiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
