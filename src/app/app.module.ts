import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { AccountsListComponent } from './accounts-list/accounts-list.component';
import { AccountServiceService } from './service/account-service.service';
import { CashFlowComponent } from './cash-flow/cash-flow.component';
import { MarketMoversComponent } from './market-movers/market-movers.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountsListComponent,
    CashFlowComponent,
    MarketMoversComponent,
//     AccountServiceService
//     AccountsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AccountServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
