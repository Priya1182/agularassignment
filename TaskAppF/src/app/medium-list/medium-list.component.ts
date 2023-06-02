import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Task } from '../taskview/Task';
import { RouterService } from '../router.service';

@Component({
  selector: 'app-medium-list',
  templateUrl: './medium-list.component.html',
  styleUrls: ['./medium-list.component.css']
})
export class MediumListComponent {
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
