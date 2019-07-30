import { Component, OnInit, ViewChild, ChangeDetectorRef, Input } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource} from '@angular/material';
import {NgForm} from '@angular/forms';
import { EMPLOYEE_DATA } from 'src/app/@data/EMPLOYEE_DATA';
import { EMPLOYEE } from 'src/app/@data/EMPLOYEE';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  @Input() hero: EMPLOYEE;
  
  constructor() { }

  ngOnInit() {

  }

}

