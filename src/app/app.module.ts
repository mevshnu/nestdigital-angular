import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GalaryComponent } from './galary/galary.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NavComponent } from './nav/nav.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ViewcourseComponent } from './viewcourse/viewcourse.component';
import { ViewfriendComponent } from './viewfriend/viewfriend.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { EmployeesignupComponent } from './employeesignup/employeesignup.component';
import { AddfriendComponent } from './addfriend/addfriend.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const myrout:Routes=[
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:"contact",
    component:ContactComponent
  },
  {
    path:"galary",
    component:GalaryComponent
  }

]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalaryComponent,
    AboutComponent,
    ContactComponent,
    NavComponent,
    AdminloginComponent,
    ViewcourseComponent,
    ViewfriendComponent,
    EmployeeloginComponent,
    EmployeesignupComponent,
    AddfriendComponent,
    AddcourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myrout),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
