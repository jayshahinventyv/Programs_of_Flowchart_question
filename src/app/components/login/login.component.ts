import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'console';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public username: string="";
  public pass:string="";
  constructor(private router:Router){
  }
  getUser(uname:string,pass:string){
    this.username=uname;
    this.pass=pass;
    console.log(this.username,this.pass);
    if(this.username=="jaykshah" && this.pass=="jay1234"){
      this.router.navigate(['home'])  
    }
    else{
      alert("Wrong Username or Password")
    } 
  }
}
