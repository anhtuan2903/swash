import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  days=[
    '1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'
  ];

  ATTENDANCE_DATA=[
    {id: '1', attendance: 'yes'},
    {id: '2', attendance: 'no'},
    {id: '3', attendance: 'no'},
    {id: '4', attendance: 'yes'}
  ];

  iconnames = "done";

  checkthis(){
    if(this.iconnames = "done"){
      this.iconnames = "home";
    }
    else{
      this.iconnames = "done";
    }
  }
}
