import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { AccountsListComponent } from './accounts-list/accounts-list.component';
import { AccountServiceService } from './service/account-service.service';

@NgModule({
  declarations: [
    AppComponent,
    AccountsListComponent,
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
