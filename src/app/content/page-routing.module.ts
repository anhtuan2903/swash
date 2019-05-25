import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content.component';
import { TodolistComponent } from '../@pages/todolist/todolist.component';
import { EmployeeComponent } from '../@pages/employee/employee.component';
import { ProjectcontrolComponent } from '../@pages/projectcontrol/projectcontrol.component';
import { AttendanceComponent } from '../@pages/attendance/attendance.component';

const routes: Routes = [
  { path: ' ', component: ProjectcontrolComponent},
  { path: 'todolist', component: TodolistComponent },
  { path: 'path', component: EmployeeComponent },
  { path: 'manhour', component: AttendanceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
