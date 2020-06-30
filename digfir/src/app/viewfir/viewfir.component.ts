import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewfir',
  templateUrl: './viewfir.component.html',
  styleUrls: ['./viewfir.component.css']
})
export class ViewfirComponent implements OnInit {
public fir;
  constructor(private us:UserService,private router:Router) { }

  ngOnInit() {
  }
findfir(userobj)
{
  console.log(userobj)
  this.us.getfir(userobj).subscribe(
    (data)=>{this.fir=data;
    console.log(data);},
    (err)=>{
      return console.error(err);
    }

  )
}
}
