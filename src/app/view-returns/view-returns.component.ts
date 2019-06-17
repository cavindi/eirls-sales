import { Component, OnInit } from '@angular/core';
import { EnquiryService } from '../services/enquiry.service';

@Component({
  selector: 'app-view-returns',
  templateUrl: './view-returns.component.html',
  styleUrls: ['./view-returns.component.css']
})
export class ViewReturnsComponent implements OnInit {

  enquiryList = [];

  constructor(
    private enquiryService: EnquiryService
  ) { }

  ngOnInit() {
    this.viewAllEnquiries();
  }

  viewAllEnquiries() {
    this.enquiryService.getAll().subscribe(data => {
      this.enquiryList = data;
      console.log(data);
    });
  }

}
