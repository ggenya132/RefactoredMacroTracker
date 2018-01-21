import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  statusMessage = ''
  errorMessage;
  signedIn = false;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {

    this.authService.errorOccurred.subscribe(res => {
      this.errorMessage = res['message'];
      this.statusMessage = this.errorMessage;
      console.log(this.errorMessage);
    });
  }


  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;


    this.authService.logIn(email, password);
    this.signedIn = this.authService.getToken() != null;
    if (this.signedIn) {
      this.statusMessage = 'Signed In!';
    }

  }
}
