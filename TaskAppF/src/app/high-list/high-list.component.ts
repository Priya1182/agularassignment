import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Task } from '../taskview/Task';
import { RouterService } from '../router.service';

@Component({
  selector: 'app-high-list',
  templateUrl: './high-list.component.html',
  styleUrls: ['./high-list.component.css']
})
export class HighListComponent {
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
  goback(){
    this.router.routeBack();
  }
}
