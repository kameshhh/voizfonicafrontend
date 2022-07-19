import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { BilldetailsComponent } from './billdetails/billdetails.component';
import { DongleplansComponent } from './dongleplans/dongleplans.component';
import { AboutusComponent } from './Frontend/Components/aboutus/aboutus.component';
import { AdminloginComponent } from './Frontend/Components/adminlogin/adminlogin.component';
import { CarouselComponent } from './Frontend/Components/carousel/carousel.component';
import { ComplainComponent } from './Frontend/Components/complain/complain.component';
import { CustomerformComponent } from './Frontend/Components/customerform/customerform.component';
import { PlansComponent } from './Frontend/Components/plans/plans.component';
import { LogoutComponent } from './logout/logout.component';
import { PaymentComponent } from './payment/payment.component';
import { PostpaidplansComponent } from './postpaidplans/postpaidplans.component';
import { PrepaidplansComponent } from './prepaidplans/prepaidplans.component';
import { RechargedoneComponent } from './rechargedone/rechargedone.component';
import { SignupComponent } from './signup/signup.component';
import { UseraccountComponent } from './useraccount/useraccount.component';
import { UserlandingComponent } from './userlanding/userlanding.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { ViewComponent } from './view/view.component';
import { ViewrechargehistoryComponent } from './viewrechargehistory/viewrechargehistory.component';


const routes: Routes = [
  {path:'Admin Login', component: AdminloginComponent},
  {path:'', component: CarouselComponent},
  {path:'custform', component: CustomerformComponent},
  {path:'aboutus', component: AboutusComponent},
  {path:'bckhome', component:CarouselComponent},
  {path:'plans', component: PlansComponent},
  {path:'signup', component:SignupComponent},
  {path:'userlogin', component:UserloginComponent },
  {path:'complain', component:ComplainComponent},
  {path:'login',component:AdminpageComponent},
  {path:'userlogin/:pid/view',component:ViewComponent},
  {path:'userrecharge/:pemail/view',component:ViewrechargehistoryComponent},
  {path:'plans/dongleplans',component:DongleplansComponent},
  {path:'plans/dongleplans/chosen', component:PaymentComponent},
  {path:'plans/prepaidplans', component:PrepaidplansComponent},
  {path:'plans/prepaidplans/chosen',component:PaymentComponent},
  {path:'plans/postpaidplans', component: PostpaidplansComponent},
  {path:'plans/postpaidplans/chosen/:pid/view', component:PaymentComponent},
  {path:'plans/prepaidplans/chosen/:pid/view', component:PaymentComponent},
  {path:'plans/dongleplans/chosen/:pid/view', component:PaymentComponent},
  {path:'userlanding', component:UserlandingComponent},
  {path:'userlogin/customerlogin/complain', component:ComplainComponent},
  {path:'home', component:CarouselComponent},
  {path:'aboutus', component:AboutusComponent},
  {path:'recharge', component:PlansComponent},
  {path:'paymentcompleted',
  component:RechargedoneComponent},
  {path:'billdetails/:pid', component: BilldetailsComponent},
  {path:'useraccount', component:UseraccountComponent },
  {path:'contactus/usefullink/aboutus', component:AboutusComponent},
  {path:'contactus/usefullink/services', component:PlansComponent},
  {path:'contactus/usefullink/contactus', component: CustomerformComponent},
  {path:'logout', component:LogoutComponent }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
