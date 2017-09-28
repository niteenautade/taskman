import { Component, OnInit } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
@Component({
  selector: 'app-viewalltasks',
  templateUrl: './viewalltasks.component.html',
  styleUrls: ['./viewalltasks.component.css']
})
export class ViewalltasksComponent implements OnInit {
  data : any[];
  constructor(public authHttp : AuthHttp) {
      this.authHttp.get('http://127.0.0.1:8000/taskapp/allTasksDetailed').subscribe(
        (res)=>{
          console.log(res.json())
          this.data = res.json();
          for(var i=0;i<this.data.length;i++){
            this.data[i].reminderTime = new Date(this.data[i].reminderTime);
          }
        },
        (err)=>{
          console.log(err);
        }
      )
  }

  ngOnInit() {
  }
  
}
