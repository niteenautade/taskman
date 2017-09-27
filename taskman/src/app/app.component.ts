import { Component } from '@angular/core';
import { Http, Headers,RequestOptions } from '@angular/http'; 
import { AuthHttp } from 'angular2-jwt';
import { GlobalService } from './services/global/global.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(public _http : Http,public authHttp: AuthHttp,public _global : GlobalService) { }
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
