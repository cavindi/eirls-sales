import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(form) {
    if (form.username == "admin" && form.password == "password") {
      this.router.navigateByUrl("/home");
    }
    else if (form.username == "" && form.password == "") {
      this.toastr.warning("Empty username and password! Please check again!", "Warning");
    }
    else {
      this.toastr.warning("Incorrect credentials! Try again", "Warning");
    }
  }
}
