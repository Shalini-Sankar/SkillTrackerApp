import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component'
import { SearchProfileComponent } from './search-profile/search-profile.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'search', component: SearchProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
