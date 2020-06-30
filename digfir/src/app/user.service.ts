import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
aadharnum:any;
user:object;
user1:object;
req_id:any;
obj_id:any;
home:boolean=true;
userLogged:Boolean=false;

  constructor(private hc:HttpClient) { }
    doRegister(userObj)
    {
      return this.hc.post('/user/register',userObj);
    }
    doLogin(userobj)
    {
      return this.hc.post('/user/login',userobj);

    }
    getAadhardetails(userObj):Observable<any>
    {
      return this.hc.post('/user/otp',userObj);
    }
    verifyotp(userObj):Observable<any>
    {
      
      this.user=userObj;
      this.req_id=userObj.req_id;
      return this.hc.post('/user/verifyotp',userObj);
    }
   getdetails()
   {
    // console.log("in service ",this.user)
     return this.hc.post('/user/getdetails',this.user);
   }
  
complaint(userobj)
{
  userobj.aadharnum=this.aadharnum;
  return this.hc.post('/user/complaint',userobj);
}
describeEvent(userobj)
{
  userobj.insertedId=this.obj_id;
  return this.hc.post('/user/describe',userobj);
}
suspectdetails(userobj)
{
  
  userobj.insertedId=this.obj_id;
  this.user=userobj;
  return this.hc.post('/user/suspectdetails',userobj);
}
previewfir()
{
  return this.hc.post('/user/previewfir',this.user);
}
cancelfir()
{
  return this.hc.post('/user/cancelfir',this.user);
}
getfir(userobj)
{
 // console.log(userobj)
  return this.hc.post('/user/viewfir',userobj);
}

Logout(){
  localStorage.removeItem('signedToken');

  this.userLogged=false;
}
getprofile(userobj)
{
 // console.log("in service ",this.user)
console.log(userobj);
  return this.hc.post('/user/getprofile',userobj);
}
getusercomplaints(userobj)
{
 // console.log("in service ",this.user)
console.log(userobj);
  return this.hc.post('/user/getusercomplaints',userobj);
}
}
