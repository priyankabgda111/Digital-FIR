import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private us:UserService,private router:Router) { }

  ngOnInit() {
  }
 file()
 {
   this.us.home=false;
 }

  isuserLogged()
  {
    return this.us.userLogged;
  }
  onLogout()
{
 this.us.Logout();
 this.us.home=true;
 this.router.navigateByUrl('/');
}

}
