import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccountsListComponent} from './accounts-list/accounts-list.component';
import {HomePageComponent} from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { UserListComponent } from './user-list/user-list.component';
// import { UserFormComponent } from './user-form/user-form.component';

const routes: Routes = [
  {path:'', component: HomePageComponent},
  {path:'manage-accounts', component: AccountsListComponent},
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/not-found'}
  // {path:'', redirectTo:"home"},
  // {path:'home', component: AccountsListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
