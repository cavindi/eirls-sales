import { CustomerService } from './services/customer.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ManageCustomerComponent } from './manage-customer/manage-customer.component';
import { ManageEnquiryComponent } from './manage-enquiry/manage-enquiry.component';
import { HomeComponent } from './home/home.component';
import { ManageReturnsComponent } from './manage-returns/manage-returns.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { ViewEnquiryComponent } from './view-enquiry/view-enquiry.component';
import { EnquiryService } from './services/enquiry.service';
import { PromotionComponent } from './promotion/promotion.component';
import { ViewReturnsComponent } from './view-returns/view-returns.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ManageCustomerComponent,
    ManageEnquiryComponent,
    HomeComponent,
    ManageReturnsComponent,
    NavbarComponent,
    ViewCustomerComponent,
    ViewEnquiryComponent,
    PromotionComponent,
    ViewReturnsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    // NgbModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    
    AppRoutingModule
  ],
  providers: [
    CustomerService,
    EnquiryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }