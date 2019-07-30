import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource} from '@angular/material';
import {NgForm} from '@angular/forms';
import { EMPLOYEE_DATA } from 'src/app/@data/EMPLOYEE_DATA';
import { EMPLOYEE } from 'src/app/@data/EMPLOYEE';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  heroes = EMPLOYEE_DATA;
  selectedHero: EMPLOYEE;

  onSelect(hero: EMPLOYEE): void {
    this.selectedHero = hero;
  }

  addEmployee(newEmployee: NgForm){
    console.log(newEmployee.value);
    // this.EMPLOYEE_DATA.push (newEmployee.value);
    EMPLOYEE_DATA.push ({seqno: 25, name: 'Huynhasdad Thsad Binh', sex: 'Male', employeeid: 'RD0016', age: '26', role: ' Mold Engineer', joindate: 'Oct 2017', exp: '1years 6month'});
    this.ngOnInit;
  }

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

  // newseqno = this.dataSource.data.length + 1;

}

