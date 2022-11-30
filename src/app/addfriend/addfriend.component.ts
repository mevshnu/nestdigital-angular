import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addfriend',
  templateUrl: './addfriend.component.html',
  styleUrls: ['./addfriend.component.css']
})
export class AddfriendComponent {

  name=""
  friendName=""
  friendNickName=""
  DescribeYourFriend=""
constructor(private api:ApiService){}
  readAdd=()=>
  {
    let data2:any={"name":this.name,"friendName":this.friendName,"friendNickName":this.friendNickName,"DescribeYourFriend":this.DescribeYourFriend}
  console.log(data2)
  this.api.friendadd(data2).subscribe(
    (response:any)=>
    {
      console.log(response)
    }
  )
  }

}
