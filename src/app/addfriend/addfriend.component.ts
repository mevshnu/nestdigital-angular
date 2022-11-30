import { Component } from '@angular/core';

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

  readAdd=()=>
  {
    let data:any={"name":this.name,
    "friendsName":this.friendName,
    "friendsNickname":this.friendNickName,
    "DescribeYourFriend":this.DescribeYourFriend}
  console.log(data)
  }

}
