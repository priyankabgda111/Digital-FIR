import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { GetdetailsComponent } from './getdetails/getdetails.component';

@Component({
  selector: 'app-filefir',
  templateUrl: './filefir.component.html',
  styleUrls: ['./filefir.component.css']
})
export class FilefirComponent implements OnInit {

  constructor(private us:UserService,private router:Router) { }
public phno;
userobj:object;

req_id:any;
  ngOnInit() {
      document.body.classList.add('bg-img');
  this.req_id=0;
  }
sendotp(userObj)
{
this.us.getAadhardetails(userObj).subscribe(
 (data)=>{
    console.log(data.message);
  if(data.message=="success")
  this.req_id=data.data.request_id;
  else
  alert("enter valid aadhar num");
  },
  err => {
    return console.error(err);
  }
)
//console.log(this.phno);
}


isOtpSent():boolean
{
  if(this.req_id==0)
  return false;
  return true;
}
verified:boolean=false;
checkotp(userObj)
{

userObj.req_id=this.req_id;
this.us.verifyotp(userObj).subscribe(
  (data)=>{
    if(data.status=='0'){
    this.verified=true;
    window.alert("otp verified");
    this.us.aadharnum=userObj.aadharnum;
    this.router.navigateByUrl("/user/getdetails");
    
    }
    else
    {
      window.alert("invalid otp..try again");

      this.req_id=0;
     
    }

  },
  err => {
    return console.error(err);
  }
)

}


}
