import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  EMPLOYEE_DATA= [
    {seqno: 1, name: 'Nguyen Tuan Anh', sex: 'Male', employeeid: 'RD0001', email:'anh.nguyentuan@nidec.com', age: '26', role: ' Electrical Engineer'},
    {seqno: 2, name: 'Dang Vien Du', sex: 'Male', employeeid: 'RD0002', email:'du.dangvien@nidec.com', age: '25', role: ' Mechanical Engineer'},
    {seqno: 3, name: 'Dao Duc Thang', sex: 'Male', employeeid: 'RD0008', email:'thang.daoduc@nidec.com', age: '26', role: ' Mechanical Engineer'},
    {seqno: 4, name: 'Nguyen Phan Truong Khang', sex: 'Male', employeeid: 'RD0004', email:'khang.nguyenphantruong@nidec.com', age: '26', role: ' Mechanical Engineer'},
    {seqno: 5, name: 'Nguyen Dang Khoa', sex: 'Male', employeeid: 'RD0005', email:'khoa.nguyendang@nidec.com', age: '26', role: ' Mechanical Engineer'},
    {seqno: 6, name: 'Tran Long', sex: 'Male', employeeid: 'RD0006', email:'long.tran@nidec.com', age: '26', role: ' Mechanical Engineer'},
    {seqno: 7, name: 'Chu Minh Huy', sex: 'Male', employeeid: 'RD0003', email:'huy.chuminh@nidec.com', age: '26', role: ' Electrical Engineer'},
    {seqno: 8, name: 'Nguyen Hoang Phat', sex: 'Male', employeeid: 'RD0007', email:'phat.nguyenhoang@nidec.com', age: '26', role: ' Mechanical Engineer'},
    {seqno: 9, name: 'Le Trong Tinh', sex: 'Male', employeeid: 'RD0011', email:'tinh.letrong@nidec.com', age: '26', role: ' Electrical Engineer'},
    {seqno: 10, name: 'Huynh Thu Thao', sex: 'Female', employeeid: 'RD0010', email:'thao.huynhthu@nidec.com', age: '26', role: ' Electrical Engineer'},
    {seqno: 11, name: 'Vo Thanh Xuan', sex: 'Male', employeeid: 'RD0024', email:'xuan.vothanh@nidec.com', age: '26', role: ' Mechanical Engineer'},
    {seqno: 12, name: 'Dinh Huu Ngoc Son', sex: 'Male', employeeid: 'RD0015', email:'son.dinhhuungoc@nidec.com', age: '26', role: ' Mechanical Engineer'},
    {seqno: 13, name: 'Pham Duc Thien', sex: 'Male', employeeid: 'RD0023', email:'thien.phamduc@nidec.com', age: '26', role: ' Electrical Engineer'},
    {seqno: 14, name: 'Truong Chi Dung', sex: 'Male', employeeid: 'RD0013', email:'dung.truongchi@nidec.com', age: '26', role: ' Electrical Engineer'},
    {seqno: 15, name: 'Mac Vien Ban', sex: 'Male', employeeid: 'RD0022', email:'ban.macvien@nidec.com', age: '26', role: ' Mechanical Engineer'},
    {seqno: 16, name: 'Nguyen Minh Nhut', sex: 'Male', employeeid: 'RD0020', email:'nhut.nguyeminh@nidec.com', age: '26', role: ' Electrical Engineer'},
    {seqno: 17, name: 'Ho Ngoc Duc', sex: 'Male', employeeid: 'RD0012', email:'duc.hongoc@nidec.com', age: '26', role: ' Mechanical Engineer'},
    {seqno: 18, name: 'Bui Dinh Bao', sex: 'Male', employeeid: 'RD0021', email:'bao.buidinh@nidec.com', age: '26', role: ' Mechanical Engineer'},
    {seqno: 19, name: 'Tran Nhu Thai', sex: 'Male', employeeid: 'RD0009', email:'thai.trannhu@nidec.com', age: '26', role: ' Electrical Engineer'},
    {seqno: 20, name: 'Hoang Dinh Nguyen', sex: 'Male', employeeid: 'RD0014', email:'nguyen.hoangdinh@nidec.com', age: '26', role: ' Electrical Engineer'},
    {seqno: 21, name: 'Dang Quoc Anh', sex: 'Male', employeeid: 'RD0018', email:'anh.dangquoc@nidec.com', age: '26', role: ' Mold Engineer'},
    {seqno: 22, name: 'Bui Anh Tuan', sex: 'Male', employeeid: 'RD0019', email:'tuan.buianh@nidec.com', age: '26', role: ' Mold Engineer'},
    {seqno: 23, name: 'Tieu Van Tan', sex: 'Male', employeeid: 'RD0017', email:'tan.tieuvan@nidec.com', age: '26', role: ' Mold Engineer'},
    {seqno: 24, name: 'Huynh Thanh Binh', sex: 'Male', employeeid: 'RD0016', email:'binh.huynhthanh@nidec.com', age: '26', role: ' Mold Engineer'}
    ];

  displayedColumns: string[] = ['seqno', 'name', 'employeeid', 'age', 'sex', 'email', 'role'];
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

