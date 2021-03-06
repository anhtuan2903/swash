import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodolistComponent } from '../../@pages/todolist/todolist.component';
import { EmployeeComponent } from '../../@pages/employee/employee.component';
import { ProjectcontrolComponent } from '../../@pages/projectcontrol/projectcontrol.component';
import { AttendanceComponent } from '../../@pages/attendance/attendance.component';
import { DashboardComponent } from '../../@pages/dashboard/dashboard.component';
import { PathComponent } from '../../@pages/path/path.component';
import { EmployeeDetailComponent } from '../../@pages/employee-detail/employee-detail.component';
import { ScheduleComponent } from '../../@pages/schedule/schedule.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'project', component: ProjectcontrolComponent },
  { path: 'todolist', component: TodolistComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'path', component: PathComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'attendance', component: AttendanceComponent },
  { path: 'employee-detail', component: EmployeeDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
