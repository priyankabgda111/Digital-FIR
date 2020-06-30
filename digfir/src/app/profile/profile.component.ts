import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
username:any;
public user={username:null};
user1:object;
  constructor(private us:UserService) { 
    this.username=JSON.parse(localStorage.getItem('username'));
    this.user.username=this.username;
  }

  ngOnInit() {
    this.getuserprofile();
  }
  getuserprofile()
  {
    console.log(this.user);
    
      this.us.getprofile(this.user).subscribe(
        data => {this.user1=data;console.log(data)},
        err => console.log(err)

      )
  }
edit()
{
  
}
}
