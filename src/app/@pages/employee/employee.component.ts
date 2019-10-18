import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource} from '@angular/material';
import { NgForm } from '@angular/forms';
import { EMPLOYEE_DATA } from 'src/app/@data/EMPLOYEE_DATA';
import { EMPLOYEE } from 'src/app/@data/EMPLOYEE';
import { EmployeeDetailComponent } from '../employee-detail/employee-detail.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  heroes = EMPLOYEE_DATA;
  selectedHero: EMPLOYEE;

  displayedColumns: string[] = ['seqno', 'name', 'employeeid', 'role', 'joindate', 'age', 'sex', 'exp' ];
  dataSource = new MatTableDataSource(EMPLOYEE_DATA);

  constructor(private changeDetectorRefs: ChangeDetectorRef) { }
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    // this.addEmployee;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onSelect(hero: EMPLOYEE): void {
    this.selectedHero = hero;
  }

  newseqno: number = this.dataSource.data.length + 1;

  addEmployee(newEmployee: NgForm){
    // this.EMPLOYEE_DATA.push (newEmployee.value);
    EMPLOYEE_DATA.push (newEmployee.value);

    this.dataSource = new MatTableDataSource(EMPLOYEE_DATA);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.newseqno = this.newseqno + 1;
    newEmployee.resetForm();
    window.alert('New employee has been added');

  }








}

