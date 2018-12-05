import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularmaterialModule } from "./angularmaterial/angularmaterial.module";
import { NavbarComponent } from './common/navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { AppRoutingModule } from './app-routing.module';
import { InterceptorService } from './services/interceptor.service';
import { UnauthorizedInterceptorService } from './services/unauthorized-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularmaterialModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi:true},
    {provide: HTTP_INTERCEPTORS, useClass: UnauthorizedInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
