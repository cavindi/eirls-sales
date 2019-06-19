import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ManageCustomerComponent } from './manage-customer/manage-customer.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { ManageEnquiryComponent } from './manage-enquiry/manage-enquiry.component';
import { ViewEnquiryComponent } from './view-enquiry/view-enquiry.component';
import { ManageReturnsComponent } from './manage-returns/manage-returns.component';
import { ViewReturnsComponent } from './view-returns/view-returns.component';
import { PromotionComponent } from './promotion/promotion.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'customers/new', component: ManageCustomerComponent },
  { path: 'customers/:id', component: ManageCustomerComponent },
  { path: 'customers', component: ViewCustomerComponent },
  { path: 'enquiries/new', component: ManageEnquiryComponent },
  { path: 'enquiries/:id', component: ManageEnquiryComponent },
  { path: 'enquiries', component: ViewEnquiryComponent },
  { path: 'returns', component: ManageReturnsComponent },
  { path: 'view-returns', component: ViewReturnsComponent },
  { path: 'promotions', component: PromotionComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
