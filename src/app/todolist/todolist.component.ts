import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  task: string;

  tasklist = [
    'Episode I - The Phantom Menaceádsađasađá  ád adấd  áda da đa a sđấ đa sd ád',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi'
  ];

  onEnter(task: string){
    this.tasklist.unshift ( task );
    this.task = '';
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tasklist, event.previousIndex, event.currentIndex);
  }
}
