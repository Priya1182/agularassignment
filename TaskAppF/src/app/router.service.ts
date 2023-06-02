import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router:Router,private location:Location){ 

  }
  routeToTasks(){
    this.router.navigate(['task']);
  }
  routeTolow(){
    this.router.navigate(['taskview/low']);
  }
  routeTomed(){
    this.router.navigate(['taskview/med']);
  }
  routeTohigh(){
    this.router.navigate(['taskview/high']);
  }
  routeBack(){
    this.location.back();
  }
  routeToTaskView(){
    this.router.navigate(['taskview']);
  }
  reload(){
    window.location.reload();
  }
}
