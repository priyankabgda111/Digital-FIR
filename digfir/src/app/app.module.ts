import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { ViewfirComponent } from './viewfir/viewfir.component';
import { FilefirComponent } from './filefir/filefir.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { GetdetailsComponent } from './filefir/getdetails/getdetails.component';
import { ComplaintComponent } from './filefir/complaint/complaint.component';
import { DescribeComponent } from './filefir/describe/describe.component';
import { SuspectComponent } from './filefir/suspect/suspect.component';
import { PreviewfirComponent } from './filefir/previewfir/previewfir.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { MycomplaintsComponent } from './mycomplaints/mycomplaints.component';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AboutComponent,
    ViewfirComponent,
    FilefirComponent,
    GetdetailsComponent,
    ComplaintComponent,
    DescribeComponent,
    SuspectComponent,
    PreviewfirComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    MycomplaintsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  bootstrap: [IndexComponent]
})
export class AppModule { }
