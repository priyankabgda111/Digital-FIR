import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-mycomplaints',
  templateUrl: './mycomplaints.component.html',
  styleUrls: ['./mycomplaints.component.css']
})
export class MycomplaintsComponent implements OnInit {
  username:any;
public user={username:null};
firs:object;
constructor(private us:UserService) { 
  this.username=JSON.parse(localStorage.getItem('username'));
  this.user.username=this.username;
}

  ngOnInit() {
    this.getusercomplaints();
  }
getusercomplaints()
{
  this.us.getusercomplaints(this.user).subscribe(
    data => {this.firs=data;console.log(data)},
    err => console.log(err)

  )
}
}
