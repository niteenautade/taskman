import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';  
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  modelUsername : string;
  modelPassword : string;
  loginError : string;
  constructor(public _http : Http,public router : Router) { }

  ngOnInit() {
  }

  loginSubmit(data){
    console.log('making post request => ',data);
    this._http.post('http://127.0.0.1:8000/auth/',data).subscribe(
      (res)=>{
        console.log(res.json())
        let response = res.json();
        localStorage.setItem('token', response['token']);
        this.router.navigate(['taskapp'])
      },
      (err)=>{
        this.loginError = "Invalid Username/Password Combination. Try Again"
        console.log(err);
      }
    )
  }
}
