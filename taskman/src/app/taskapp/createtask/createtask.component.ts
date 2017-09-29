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
  modelUser : any;
  constructor(public authHttp : AuthHttp) {
  }

  ngOnInit() {
  }
  changePicked(model){
    this.modelUser = model;
  }
  createTask(formdata){
    formdata['user'] = this.modelUser;
    console.log('making post request => ',formdata);
    this.authHttp.post('http://127.0.0.1:8000/taskapp/tasks',formdata).subscribe(
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
