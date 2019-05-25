import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { TodolistComponent } from '../../@pages/todolist/todolist.component';

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
    {title:'Dashboard', link: ' ', icon:'search-outline'},
    {title:'Schedule', link: '/schedule', icon:'search-outline'},
    {title:'Path', link: '/path', icon:'search-outline'},
    {title:'Manhour', link: '/manhour', icon:'search-outline'},
    {title:'To do list', link: '/todolist', icon:'search-outline'}
  ]
}
