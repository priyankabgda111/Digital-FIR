import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-previewfir',
  templateUrl: './previewfir.component.html',
  styleUrls: ['./previewfir.component.css']
})
export class PreviewfirComponent implements OnInit {

  constructor(private us:UserService,private router:Router) { }
fir:any;
  ngOnInit() {
    this.previewfir();
  }
  previewfir()
  {
     this.us.previewfir().subscribe(
       data => {console.log(data);this.fir=data;},
       err => console.log(err)
     )
    }

file()
{
 window.alert("FIR is filed successfully..!!");
this.us.home=true;
 this.router.navigateByUrl("/");
}
cancel()
{
  this.us.cancelfir().subscribe(
    data => {console.log(data);this.router.navigateByUrl("/");},
    err => console.log(err)
  )
}
}