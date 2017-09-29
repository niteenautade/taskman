import { Component, OnInit } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
@Component({
  selector: 'app-viewusertask',
  templateUrl: './viewusertask.component.html',
  styleUrls: ['./viewusertask.component.css']
})
export class ViewusertaskComponent {
  
  data : any[];
  sub :any;
  usersData : any;
  modelUser: any;
  constructor(public authHttp : AuthHttp) { }
  changePicked(model){
    this.modelUser = model;
  }
  
  ngOnInit() {
  }
  fetchTask(formdata){
    console.log("making get request:",formdata)
    formdata['user'] = this.modelUser;
    let obj = { 'url': 'http://127.0.0.1:8000/taskapp/allTasksDetailed/', 'id': formdata }
    let url = obj.url + obj.id;
    this.authHttp.get(url).subscribe(
      (res) => {
        console.log(res.json())
        this.data = res.json();
        for (var i = 0; i < this.data.length; i++) {
          this.data[i].reminderTime = new Date(this.data[i].reminderTime);
        }
      },
      (err) => {
        console.log(err);
      }
    )

  }
}
