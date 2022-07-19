import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from'@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Frontend/Components/navbar/navbar.component';
import { CarouselComponent } from './Frontend/Components/carousel/carousel.component';
import { AdminloginComponent } from './Frontend/Components/adminlogin/adminlogin.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CustomerformComponent } from './Frontend/Components/customerform/customerform.component';
import { AboutusComponent } from './Frontend/Components/aboutus/aboutus.component';
import { ComplainComponent } from './Frontend/Components/complain/complain.component';
import { PlansComponent } from './Frontend/Components/plans/plans.component';
import { SignupComponent } from './signup/signup.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UseraccountComponent } from './useraccount/useraccount.component';
import { LogoutComponent } from './logout/logout.component';
import { DongleplansComponent } from './dongleplans/dongleplans.component';
import { PostpaidplansComponent } from './postpaidplans/postpaidplans.component';
import { PrepaidplansComponent } from './prepaidplans/prepaidplans.component';
import { PaymentComponent } from './payment/payment.component';
import { LandingserviceComponent } from './landingservice/landingservice.component';
import { RechargedoneComponent } from './rechargedone/rechargedone.component';
import { UserlandingComponent } from './userlanding/userlanding.component';
import { BilldetailsComponent } from './billdetails/billdetails.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { ViewComponent } from './view/view.component';
import { ViewrechargehistoryComponent } from './viewrechargehistory/viewrechargehistory.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    AdminloginComponent,
    CustomerformComponent,
    AboutusComponent,
    ComplainComponent,
    PlansComponent,
    SignupComponent,
    UserloginComponent,
    UseraccountComponent,
    LogoutComponent,
    DongleplansComponent,
    PostpaidplansComponent,
    PrepaidplansComponent,
    PaymentComponent,
    LandingserviceComponent,
    RechargedoneComponent,
    UserlandingComponent,
    BilldetailsComponent,
    AdminpageComponent,
    ViewComponent,
    ViewrechargehistoryComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
