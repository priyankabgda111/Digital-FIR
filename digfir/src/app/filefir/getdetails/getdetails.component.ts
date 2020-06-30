import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-getdetails',
  templateUrl: './getdetails.component.html',
  styleUrls: ['./getdetails.component.css']
})
export class GetdetailsComponent implements OnInit {

  constructor(private us:UserService,private router:Router) { }
user:object;
  ngOnInit() {
    this.getuserdetails();
  }
  getuserdetails()
  {
      this.us.getdetails().subscribe(
        data => {this.user=data;console.log(data)},
        err => console.log(err)

      )
  }
  continue()
  {
    this.router.navigateByUrl('/user/complaint')
  }
  cancel()
  {
    this.router.navigateByUrl('/');
  }

}
