import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { LoginComponent } from './login/login.component';
import {GuardService as Guard} from "./services/guard.service";

const routes: Routes = [
  {path:"login", component: LoginComponent},
  {path:"home", component: HomeComponent, canActivate: [Guard]},
  {path:"**", component: LoginComponent}
]


@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
