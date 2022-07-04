import { Component, OnInit } from '@angular/core';
import { UserData } from '../models/userdata';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
data: UserData;
EmpId:string;
Username:string;
IsValid:boolean;
private _service;

  constructor(service:LoginService, private _router:Router) {
    this.data = new UserData();
    this._service= service;  
    this.IsValid = false;  
   }

  ngOnInit() {
    localStorage.clear();
  }

  validateForm()
  {   
    if(this.data.UserName == undefined || this.data.UserName == "")
    {
      document.getElementById("errMsg").innerHTML = "Please enter Username";
      return false;
    } 
    if (this.data.Password == undefined || this.data.Password == "") {
      document.getElementById("errMsg").innerHTML = "Please enter Password";
        return false;
    } 
    document.getElementById("errMsg").innerHTML = "";
    return true;
  }
  Submit()
  { 
    this.IsValid = this.validateForm()
    if(this.IsValid)
    {
        this._service.validateLoginUser(this.data).subscribe(
        response => 
        {     
            if (response == null || (response.token == "" && response.usertype == "0")) 
            {
              document.getElementById("errMsg").innerHTML = "Invalid Username or Password";
            }

            if (response.usertype == "admin") 
            {
              document.getElementById("errMsg").innerHTML = "";
              this._router.navigate(['search']);
            }
            else
            {
              document.getElementById("errMsg").innerHTML = "Unauthorized Access";
            }
        });
    }   
  }
}
