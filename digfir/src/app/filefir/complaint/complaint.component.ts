import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css']
})
export class ComplaintComponent implements OnInit {

  constructor(private us:UserService,private router:Router) { }

  ngOnInit() {
  }
submit(userobj)
{
  this.us.complaint(userobj).subscribe(
    data =>{console.log(data);
     this.us.obj_id=data;
    //  this.us.user=data;
    this.router.navigateByUrl('/user/describe')},
    err => console.log(err)
  )
}
}
