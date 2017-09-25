import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';  
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  modelUsername : string;
  modelPassword : string;
  constructor(private _http : Http) { }

  ngOnInit() {
  }

  loginSubmit(data){
    console.log('making post request => ',data);
    this._http.post('http://127.0.0.1:8000/auth/',data).subscribe(
      (res)=>{
        console.log(res.json())
        let response = res.json();
        localStorage.setItem('token', response['token']);
      },
      (err)=>{
        console.log(err);
      }
    )
  }
}
