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
    'Check me out',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    'Get in touch with my team',
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, distinctio.',
    'Write email to business cat',
    'Have fun with this list',
    'What do you think?',
    'Tomorrow morning meeting with Manager about salary increase'
  ];

  onEnter(task: string){
    this.tasklist.unshift ( task );
    this.task = '';
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tasklist, event.previousIndex, event.currentIndex);
  }

  name: string;
  tick(task: string){
    const indexnum: number = this.tasklist.indexOf(task);
    this.name = "tick";
  }

  trash(task: string){
    const indexnum: number = this.tasklist.indexOf(task);
    // if (indexnum !== -1) {
      this.tasklist.splice(indexnum,1);
    // }
  }

  getdata(){
    return this.task;
  }
}
