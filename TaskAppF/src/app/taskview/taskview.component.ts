import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Task } from './Task';
import { RouterService } from '../router.service';

@Component({
  selector: 'app-taskview',
  templateUrl: './taskview.component.html',
  styleUrls: ['./taskview.component.css']
})
export class TaskviewComponent implements OnInit {
  tasks:Task[]
  constructor(private http:HttpClient,private router:RouterService) {
  this.tasks=[]
  }
  
  ngOnInit() {
    this.http.get<Task[]>("http://localhost:3000/tasks").subscribe(
      data => this.tasks = data,
      err=>console.log(err)
    )
  }
  deletetask(id:Number){
    let sid:string=`/${id}`;
    this.http.delete("http://localhost:3000/tasks"+sid).subscribe(
      res=>{console.log(res),this.router.reload()},
      err=>{console.log(err),alert(err)}
    )
  }
  lowList(){
    this.router.routeTolow();
  }
  medList(){
    this.router.routeTomed();
  }
  highList(){
    this.router.routeTohigh();
  }

}
