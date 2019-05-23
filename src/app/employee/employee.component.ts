import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  EMPLOYEE_DATA= [
    {seqno: 1, name: 'Nguyen Tuan Anh', sex: 'Male', employeeid: 'RD0001', email:'anh.nguyentuan@nidec.com', age: '26'},
    {seqno: 2, name: 'Dang Vien Du', sex: 'Male', employeeid: 'RD0002', email:'tuan.buianh@nidec.com', age: '25'},
    {seqno: 3, name: 'Dao Duc Thang', sex: 'Male', employeeid: 'RD0008', email:'anh.nguyentuan@nidec.com', age: '26'},
    {seqno: 4, name: 'Nguyen Phan Truong Khang', sex: 'Male', employeeid: 'RD0004', email:'anh.nguyentuan@nidec.com', age: '26'},
    {seqno: 5, name: 'Nguyen Dang Khoa', sex: 'Male', employeeid: 'RD0005', email:'anh.nguyentuan@nidec.com', age: '26'},
    {seqno: 6, name: 'Tran Long', sex: 'Male', employeeid: 'RD0006', email:'anh.nguyentuan@nidec.com', age: '26'},
    {seqno: 7, name: 'Chu Minh Huy', sex: 'Male', employeeid: 'RD0003', email:'anh.nguyentuan@nidec.com', age: '26'},
    {seqno: 8, name: 'Nguyen Hoang Phat', sex: 'Male', employeeid: 'RD0007', email:'anh.nguyentuan@nidec.com', age: '26'},
    {seqno: 9, name: 'Le Trong Tinh', sex: 'Male', employeeid: 'RD0011', email:'anh.nguyentuan@nidec.com', age: '26'},
    {seqno: 10, name: 'Huynh Thu Thao', sex: 'Female', employeeid: 'RD0010', email:'anh.nguyentuan@nidec.com', age: '26'},
    {seqno: 11, name: 'Vo Thanh Xuan', sex: 'Male', employeeid: 'RD0024', email:'anh.nguyentuan@nidec.com', age: '26'},
    {seqno: 12, name: 'Dinh Huu Ngoc Son', sex: 'Male', employeeid: 'RD0015', email:'anh.nguyentuan@nidec.com', age: '26'},
    {seqno: 13, name: 'Pham Duc Thien', sex: 'Male', employeeid: 'RD0023', email:'anh.nguyentuan@nidec.com', age: '26'},
    {seqno: 14, name: 'Truong Chi Dung', sex: 'Male', employeeid: 'RD0013', email:'anh.nguyentuan@nidec.com', age: '26'},
    {seqno: 15, name: 'Mac Vien Ban', sex: 'Male', employeeid: 'RD0022', email:'anh.nguyentuan@nidec.com', age: '26'},
    {seqno: 16, name: 'Nguyen Minh Nhut', sex: 'Male', employeeid: 'RD0020', email:'anh.nguyentuan@nidec.com', age: '26'},
    {seqno: 17, name: 'Ho Ngoc Duc', sex: 'Male', employeeid: 'RD0012', email:'anh.nguyentuan@nidec.com', age: '26'},
    {seqno: 18, name: 'Bui Dinh Bao', sex: 'Male', employeeid: 'RD0021', email:'anh.nguyentuan@nidec.com', age: '26'},
    {seqno: 19, name: 'Tran Nhu Thai', sex: 'Male', employeeid: 'RD0009', email:'anh.nguyentuan@nidec.com', age: '26'},
    {seqno: 20, name: 'Hoang Dinh Nguyen', sex: 'Male', employeeid: 'RD0014', email:'anh.nguyentuan@nidec.com', age: '26'},
    {seqno: 21, name: 'Dang Quoc Anh', sex: 'Male', employeeid: 'RD0018', email:'anh.nguyentuan@nidec.com', age: '26'},
    {seqno: 22, name: 'Bui Anh Tuan', sex: 'Male', employeeid: 'RD0019', email:'anh.nguyentuan@nidec.com', age: '26'},
    {seqno: 23, name: 'Tieu Van Tan', sex: 'Male', employeeid: 'RD0017', email:'anh.nguyentuan@nidec.com', age: '26'},
    {seqno: 24, name: 'Huynh Thanh Binh', sex: 'Male', employeeid: 'RD0016', email:'anh.nguyentuan@nidec.com', age: '26'}
    ];

  displayedColumns: string[] = ['seqno', 'name', 'employeeid', 'age'];
  dataSource = new MatTableDataSource(this.EMPLOYEE_DATA);

  constructor() { }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

