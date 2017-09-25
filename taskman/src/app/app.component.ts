import { Component } from '@angular/core';
import { Http, Headers,RequestOptions } from '@angular/http'; 
import { AuthHttp } from 'angular2-jwt';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private _http : Http,public authHttp: AuthHttp) { }
/*   getData(){
    console.log("Clicked")
    let headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    headers.append('Authorization', 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwiZXhwIjoxNTA2MzQ0NTgyLCJlbWFpbCI6Im5pdGVlbmF1dGFkZUBnbWFpbC5jb20ifQ.N6ftrH3AMuRRA13oEBfr6nJBmOF4NzVRmNwoaXeA-0Y');
    //let authorization =  { Authorization: 'Token e6f445e91cee138265fd912588249f1b72602fb2' }
    let options = new RequestOptions({ headers: headers });
    this._http.get('http://127.0.0.1:8000/task/',options).subscribe(
      (res)=>{
        console.log(res)
      }
    )
  } */
  getData(){
    console.log("Clicked")
    this.authHttp.get('http://127.0.0.1:8000/task/').subscribe(
      (res)=>{
        console.log(res)
      },
      (err)=>{
        console.log("Error: No JWT present or has expired")
      }
    )
  }
}
