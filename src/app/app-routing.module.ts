import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccountsListComponent} from './accounts-list/accounts-list.component';
import {HomePageComponent} from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AccountOverviewComponent } from './account-overview/account-overview.component';
import { ManageAccountsComponent } from './manage-accounts/manage-accounts.component';

const routes: Routes = [
  {path:'', component: HomePageComponent},
  {path:'manage-accounts', component: ManageAccountsComponent, children:[
    {path:':id', component:AccountOverviewComponent}
  ]},
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
