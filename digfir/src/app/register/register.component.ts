import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private us:UserService,private router:Router) { }

  ngOnInit() {
  }
register(userObj)
{
  console.log(userObj);
  this.us.doRegister(userObj).subscribe((res)=>{
    if(res["message"]=="account created successfully")
    {
      alert(res["message"]);
      this.router.navigateByUrl('/user/login');
    }
   // if(res["message"]=="username  exists")
    else
    alert("username exists");
   
  })
}
}
