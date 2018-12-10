import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService, Login } from '../services/auth.service';
import { MatSnackBar } from "@angular/material";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService,public snack:MatSnackBar,private router:Router) { }

  isLogged: boolean

  ngOnInit() {


  }

  loginForm = new FormGroup({
    login: new FormControl('',[Validators.required,Validators.minLength(4)]),
    password: new FormControl('',[Validators.required,Validators.minLength(4)])
  });

  onSubmit(){
    
    this.auth.login(this.loginForm.value).subscribe(
      token=>{
        this.snackBar("Logging in...");
        this.router.navigate(['home']);
      },
      err=>{
        if(err.error.error.message){
          this.snackBar(err.error.error.message);
        }
        console.log(err);
      }
      );
  }

  snackBar(message:string){
    this.snack.open(message,'Dismiss',{duration:2000});
  }

}
