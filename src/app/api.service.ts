import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  frienddata=()=>
  {
    return this.http.get("https://dummyapifriends.herokuapp.com/view")
  }
  Coursedata=()=>
  {
    return this.http.get("https://mylinkurcodesapp.herokuapp.com/getcourses")
  }
  friendadd=(datatosendfriend:any)=>
  {
    return this.http.post("https://dummyapifriends.herokuapp.com/adddata",datatosendfriend)
  }
  courseadd=(datatosendcourse:any)=>
  {
    return this.http.post("https://mylinkurcodesapp.herokuapp.com/addcourse",datatosendcourse)
  }
}
