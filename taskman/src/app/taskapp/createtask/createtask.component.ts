import { Component, OnInit } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
@Component({
  selector: 'app-createtask',
  templateUrl: './createtask.component.html',
  styleUrls: ['./createtask.component.css']
})
export class CreatetaskComponent implements OnInit {
  usersData : any;
  error : string;
  success : string;
  constructor(public authHttp : AuthHttp) {
    this.authHttp.get('http://127.0.0.1:8000/taskapp/allUsers').subscribe(
      (res)=>{
        this.usersData = res.json()
      },
      (err)=>{
        this.success = "";
        this.error = "Users couldn't be fetched";
      }
    )
  }

  ngOnInit() {
  }

  createTask(data){
    console.log('making post request => ',data);
    this.authHttp.post('http://127.0.0.1:8000/taskapp/tasks',data).subscribe(
      (res)=>{
        console.log(res.json())
        this.error = "";
        this.success = "Task successfully created"
      },
      (err)=>{
        this.error = err._body;
        console.log(err);
      }
    )
  }


}
