import { Component, OnInit } from '@angular/core';

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
    {title:'Dashboard', link: '/dashboard', icon:'search-outline'},
    {title:'Project', link: '/project', icon:'search-outline'},
    {title:'Schedule', link: '/schedule', icon:'search-outline'},
    {title:'Path', link: '/path', icon:'search-outline'},
    {title:'Employee Manager', link: '/employee', icon:'search-outline'},
    {title:'Attendance', link: '/attendance', icon:'search-outline'},
    {title:'To do list', link: '/todolist', icon:'search-outline'}
  ]
}
