import {  NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { TaskviewComponent } from './taskview/taskview.component';
import { LowListComponent } from './low-list/low-list.component';
import { MediumListComponent } from './medium-list/medium-list.component';
import { HighListComponent } from './high-list/high-list.component';


const routes: Routes = [ { path: 'task', component:TaskComponent},
                         { path: 'taskview', component: TaskviewComponent,
                           children: [
                             { path: 'low', component: LowListComponent, outlet:'low-list' },
                             { path: 'med', component: MediumListComponent, outlet:'med-list' },
                             { path: 'high', component: HighListComponent, outlet:'high-list' },
                           
                           ]
                          
                         },
                         {path: 'taskview/low', component: LowListComponent},
                         {path: 'taskview/med', component: MediumListComponent},
                         {path: 'taskview/high', component: HighListComponent}
                       
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const ArrayOfComponents = [TaskComponent, 
  TaskviewComponent, LowListComponent,
  MediumListComponent,HighListComponent]