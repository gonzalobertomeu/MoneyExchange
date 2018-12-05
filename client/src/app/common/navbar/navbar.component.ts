import { Component, OnInit, SimpleChanges } from '@angular/core';

import { AuthService } from "../../services/auth.service";

import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  isLogged = true;

  constructor(public auth:AuthService, private router:Router, private snack: MatSnackBar) {
    this.auth.currentUser.subscribe(observer=>{
      if (observer.token && observer.token!=""){
        this.isLogged = true;
      } else{
        this.isLogged = false;
      }
    });
   }


  ngOnInit() {
    
  }



  logout(){
    this.auth.logout().subscribe(observer=>{
      console.log(observer.message);
      this.snack.open("Logging out","Dismiss",{duration:1500});
      this.router.navigate(["/"]);
    });
  }


}
