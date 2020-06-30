import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ViewfirComponent } from './viewfir/viewfir.component';
import { FilefirComponent } from './filefir/filefir.component';
import { FormsModule, NgForm } from '@angular/forms';
import { GetdetailsComponent } from './filefir/getdetails/getdetails.component';
import { ComplaintComponent } from './filefir/complaint/complaint.component';
import { DescribeComponent } from './filefir/describe/describe.component';
import { SuspectComponent } from './filefir/suspect/suspect.component';
import { PreviewfirComponent } from './filefir/previewfir/previewfir.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { MycomplaintsComponent } from './mycomplaints/mycomplaints.component';


const routes: Routes = [
 { path:'about',component:AboutComponent },
 {path:'user/viewfir',component:ViewfirComponent},
 {path:'user/otp',component:FilefirComponent},
 {path:'user/getdetails',component:GetdetailsComponent},
 {path:'user/complaint',component:ComplaintComponent},
 {path:'user/describe',component:DescribeComponent},
 {path:'user/suspectdetails',component:SuspectComponent},
 {path:'user/previewfir',component:PreviewfirComponent},
 {path:'user/login',component:LoginComponent},
 {path:'user/register',component:RegisterComponent},
 
 {path:'user/profile',component:ProfileComponent},
 {path:'user/mycomplaints',component:MycomplaintsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule],
  exports: [RouterModule,FormsModule,NgForm]
})
export class AppRoutingModule { }
