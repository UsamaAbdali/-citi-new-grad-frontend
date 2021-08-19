import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccountsListComponent} from './accounts-list/accounts-list.component';
// import { UserListComponent } from './user-list/user-list.component';
// import { UserFormComponent } from './user-form/user-form.component';

const routes: Routes = [
  { path: 'account', component: AccountsListComponent }
//   { path: 'adduser', component: UserFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
