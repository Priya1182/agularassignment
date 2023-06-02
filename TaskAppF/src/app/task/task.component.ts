import { group } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {  priorityDetails } from './priprity';
import { RouterService } from '../router.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  taskform: FormGroup
  title = new FormControl();
  desc = new FormControl();
  dueDate = new FormControl();
  priority = new FormControl();
  prd:priorityDetails[]
  constructor(private http: HttpClient,private router:RouterService) {
    this.taskform = new FormGroup({
      title: this.title,
      desc: this.desc,
      dueDate: this.dueDate,
      priority: this.priority
    })

    this.prd=[
      new priorityDetails('pr1', 'low'),
      new priorityDetails('pr2', 'medium'),
      new priorityDetails('pr3', 'high')
    ]
  }
  
  saveTask(taskform: FormGroup) {
    if (taskform.valid) {
     
      console.log(this.prd);
      this.taskform = taskform.value;
      
      console.log(this.taskform.value)
      this.http.post("http://localhost:3000/tasks", this.taskform).subscribe(
        task => { console.log(task), console.log("task saved !!"), this.router.routeToTaskView()},
        err => { console.log(err) }
      )
    } else {
      console.log("please enter valid details")
      this.router.routeToTasks();
    }
  }
}
