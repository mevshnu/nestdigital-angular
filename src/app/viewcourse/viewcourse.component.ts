import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewcourse',
  templateUrl: './viewcourse.component.html',
  styleUrls: ['./viewcourse.component.css']
})
export class ViewcourseComponent {

  constructor(private api:ApiService){
    api.Coursedata().subscribe(
      (response)=>
      {
        this.courses=response;
      }
    )
  }

  courses:any=[]
}
