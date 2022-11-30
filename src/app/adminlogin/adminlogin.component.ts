import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {

username=""
password=""
constructor(private routed:Router){}
readlogin=()=>
{
  let data4:any={"username":this.username,"password":this.password}
console.log(data4)
if( this.username == "admin" && this.password=="nestdigital")
{
this.routed.navigate(["/viewfriend"])
}
else
{
  alert("invalid login ")
}
}


}
