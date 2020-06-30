import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suspect',
  templateUrl: './suspect.component.html',
  styleUrls: ['./suspect.component.css']
})
export class SuspectComponent implements OnInit {

  constructor(private us:UserService,private router:Router) { }

  ngOnInit() {
  }
submit(userobj)
{
this.us.suspectdetails(userobj).subscribe(
  data => {console.log(data);
    this.router.navigateByUrl('user/previewfir')},
  err => console.log(err)
)
}
}
