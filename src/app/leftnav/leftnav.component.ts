import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { TodolistComponent } from '../todolist/todolist.component';

@Component({
  selector: 'app-leftnav',
  templateUrl: './leftnav.component.html',
  styleUrls: ['./leftnav.component.css']
})
export class LeftnavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  pages = [
    {title:'Dashboard', component: AppComponent, icon:'search-outline'},
    {title:'Schedule', component: AppComponent, icon:'search-outline'},
    {title:'Path', component: AppComponent, icon:'search-outline'},
    {title:'Manhour', component: AppComponent, icon:'search-outline'},
    {title:'To do list', component: TodolistComponent, icon:'search-outline'}
  ]
}
