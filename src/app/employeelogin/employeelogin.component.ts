import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeelogin',
  templateUrl: './employeelogin.component.html',
  styleUrls: ['./employeelogin.component.css']
})
export class EmployeeloginComponent {

  employeeid=""
  password=""
  constructor(private route:Router){}
  readlogin=()=>
  {
    let data3:any={"employeeid":this.employeeid,"password":this.password}
  console.log(data3)
  if(this.employeeid=="1122" && this.password=="12345")
  {
    this.route.navigate(["/addcourse"])

  }
  else
  {
    alert("invalid login")
  }
  }

}
