import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import { SharedataService } from './../../../services/sharedata/sharedata.service';

@Component({
  selector: 'app-userselectbox',
  templateUrl: './userselectbox.component.html',
  styleUrls: ['./userselectbox.component.css']
})
export class UserselectboxComponent implements OnInit {
  @Output() changePicked: EventEmitter<any> = new EventEmitter<any>();

  modelUser:any;
  usersData: any;
  constructor(public authHttp : AuthHttp,public _SharedataService:SharedataService) {
    this.authHttp.get('http://127.0.0.1:8000/taskapp/allUsers').subscribe(
      (res)=>{
        this.usersData = res.json();
        _SharedataService.usersData = this.usersData;
      },
      (err)=>{
        console.log(err)
      }
    )
  }

  ngOnInit() {
  }
  valueChanged(){
    this.changePicked.emit(this.modelUser);
  }

}
