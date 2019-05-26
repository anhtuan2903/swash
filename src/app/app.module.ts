import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnavComponent } from './@layout/topnav/topnav.component';
import { LeftnavComponent } from './@layout/leftnav/leftnav.component';``
import { ContentComponent } from './content/content.component';
import { TodolistComponent } from './@pages/todolist/todolist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AttendanceComponent } from './@pages/attendance/attendance.component';
import { EmployeeComponent } from './@pages/employee/employee.component';
import { MatTableModule} from '@angular/material/table';
import { MatInputModule, MatPaginatorModule, MatSortModule, MatIconModule, MatButtonModule } from '@angular/material';
import { ProjectcontrolComponent } from './@pages/projectcontrol/projectcontrol.component';
import { PageRoutingModule } from './content/page-routing.module';
import { DashboardComponent } from './@pages/dashboard/dashboard.component';
import { PathComponent } from './@pages/path/path.component';

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    LeftnavComponent,
    ContentComponent,
    TodolistComponent,
    AttendanceComponent,
    EmployeeComponent,
    ProjectcontrolComponent,
    DashboardComponent,
    PathComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    FormsModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    PageRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
