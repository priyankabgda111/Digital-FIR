import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private us:UserService,private router:Router) { }

  ngOnInit() {
  }
  login(userobj)
  {
    this.us.doLogin(userobj).subscribe((res)=>
    {
     
      if(res["message"]=="invalid user"){
        window.alert("invalid user");
        
        this.router.navigateByUrl('/user/login');
        }
        else if(res["message"]=="invalid password"){
window.alert("invalid password");
        this.router.navigateByUrl('/user/login');
        }
        else
        {
             this.us.userLogged=true;
         // alert(res["message"]);
         localStorage.setItem("username",JSON.stringify(userobj.username));
             alert("login successfully");
             this.us.home=true;
                this.router.navigateByUrl('/');
           
        }
        
   })
  }

}
