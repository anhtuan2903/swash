import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodolistComponent } from './@pages/todolist/todolist.component';
import { AppComponent } from './app.component';
import { ContentComponent } from './@layout/content/content.component';
import { EmployeeComponent } from './@pages/employee/employee.component';

const routes: Routes = [
  // { path: ' ', component: AppComponent },
  // { path: 'manhour', component: TodolistComponent },
  // { path: 'path', component: EmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
