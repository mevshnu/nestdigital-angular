import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeesignup',
  templateUrl: './employeesignup.component.html',
  styleUrls: ['./employeesignup.component.css']
})
export class EmployeesignupComponent {

  constructor(private route:Router){}

  empid=""
  firstname=""
  lastname=""
  houseno=""
  streetname=""
  pincode=""
  district=""
  state=""
  country=""
  mobile=""
  email=""
  parentname=""
  gender=""
  degree=""
  experience=""
  doj=""
  username=""
  password=""
  cpassword=""
readValues=()=>
{
  if(this.password==this.cpassword)
  {
    alert("registered Successfully")
    this.route.navigate(["/employeelogin"])
  }
  else{
    alert("Password and confirm password not match")
  }
}
}
