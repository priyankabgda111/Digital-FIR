import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-describe',
  templateUrl: './describe.component.html',
  styleUrls: ['./describe.component.css']
})
export class DescribeComponent implements OnInit {

  constructor(private us:UserService,private router:Router) { }

  ngOnInit() {
  }
add(userobj)
{
this.us.describeEvent(userobj).subscribe(
  data => {console.log(data);this.router.navigateByUrl('/user/suspectdetails')},
  err => console.log(err)

)
}
}
