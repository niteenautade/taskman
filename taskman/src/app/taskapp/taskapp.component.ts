import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from './../services/global/global.service'
@Component({
  selector: 'app-taskapp',
  templateUrl: './taskapp.component.html',
  styleUrls: ['./taskapp.component.css']
})
export class TaskappComponent implements OnInit {

  constructor(public router : Router, public _global : GlobalService) { }

  ngOnInit() {
  }
  Logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
