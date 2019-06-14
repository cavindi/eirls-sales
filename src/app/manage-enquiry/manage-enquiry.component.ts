import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EnquiryService } from '../services/enquiry.service';
import { Enquiry } from '../models/enquiry';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from '../services/customer.service';
import { ItemService } from '../services/item.service';
import { Customer } from '../models/customer';
import { Item } from '../models/item';
import { EnquiryItem } from '../models/enquiry-item';
import * as moment from 'moment';

@Component({
  selector: 'app-manage-enquiry',
  templateUrl: './manage-enquiry.component.html',
  styleUrls: ['./manage-enquiry.component.css']
})
export class ManageEnquiryComponent implements OnInit {

  id: string;
  isReadOnly = true;
  enquiry: Enquiry = new Enquiry();
  newEnquiryItem: EnquiryItem = new EnquiryItem();
  customerList: Customer[] = [];
  itemList: Item[] = [];

  constructor(
    private route: ActivatedRoute,
    private enquiryService: EnquiryService,
    private customerService: CustomerService,
    private itemService: ItemService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.fetchData();
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.enquiryService.getEnquiry(this.id).subscribe(data => {
        this.enquiry = data;
      });
    }
    else {
      this.isReadOnly = false;
    }
  }

  fetchData() {
    this.customerService.getAll().subscribe(data => {
      this.customerList = data;
    });

    this.itemService.getAll().subscribe(data => {
      this.itemList = data;
    });
  }

  edit() {
    this.isReadOnly = false;
  }

  delete() {
    this.enquiryService.deleteEnquiry(this.id).subscribe(data => {
      this.toastr.success("Enquiry/Order deleted successfully!", "Success");
      this.router.navigateByUrl('enquiries');
      // console.log(data);
    });
  }

  onSubmit() {
    
    if(this.enquiry.enquiryItems.length > 0){

      this.makeEnquiry();
    }
    else{
      this.toastr.error("No Items Added!");
    }

  }

  makeEnquiry(){

    let date = this.enquiry.dueDate;
    let dueDate =  moment(date, 'YYYY-MM-DD h:m:s A').format('DD-MM-YYYY HH:mm:ss');
    // console.log(dueDate);

    this.enquiry.dueDate = dueDate;
    // console.log(this.enquiry);

    this.enquiryService.addEnquiry(this.enquiry).subscribe(data => {
      this.toastr.success("Successful!", "Success");
      this.router.navigateByUrl('/enquiries');
    });
  }

  compareByOptionId(idFirst, idSecond) {
    return idFirst && idSecond && idFirst.id == idSecond.id;
  }

  addItem() {

    if (this.newEnquiryItem.item.quantity < this.newEnquiryItem.quantity) {
      this.toastr.error("Insufficient Quantity!", "Error")
    }
    else if (this.newEnquiryItem.item.id && this.newEnquiryItem.quantity) {
      this.enquiry.enquiryItems.push(this.newEnquiryItem);
      this.newEnquiryItem = new EnquiryItem();
    }
    else {
      this.toastr.error("Empty Fields!", "Error")
    }

  }

  deleteItem(index) {
    this.enquiry.enquiryItems.splice(index, 1);
  }

  onChange(returnType) {
    if (returnType == "Exchange") {
      this.router.navigateByUrl("/enquiries/new");
    }
    else if (returnType == "Credit") {
      this.toastr.success("Money credited to customer!", "Success");
    }
    else if (returnType == "Repair") {
      this.enquiryService.sendToProduction(this.enquiry).subscribe(data => {
        this.toastr.success("Sent to production!", "Success");
      });
    }
  }

  onChangeStatus(event){

    if(this.enquiry.orderStatus != 'New'){
      this.toastr.error("Order cannot be cancelled!");
      this.enquiry.status = '';
    }

  }
}