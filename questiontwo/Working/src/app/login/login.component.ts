import { Component, OnInit, OnDestroy, Input, Output, ViewContainerRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { fadeInCenterAnimation } from '../animations/index';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import swal from 'sweetalert2';
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [fadeInCenterAnimation],
  // host: { '[@fadeInCenterAnimation]': '' }
})
export class LoginComponent implements OnInit {

  animateLogin = '';
  animateRegister = '';
  loading = false;

  public registerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    pass: ['', Validators.required],
    cPass: ['', Validators.required],
    username: ['', Validators.required]
  });

  public loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    pass: ['', Validators.required],
  });

  model: any = {};

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      public fb: FormBuilder,
      public toastr: ToastsManager,
      private vcr: ViewContainerRef
    ) {
      this.toastr.setRootViewContainerRef(vcr);
    }

  ngOnInit() {

  }

  validAndMatching() {
    return this.registerForm.controls['cPass'].valid &&
      this.registerForm.controls['pass'].valid &&
      this.registerForm.controls['cPass'].value === this.registerForm.controls['pass'].value;
  }

  expandRegistration() {
      $('form.login-form').animate({height: 'toggle', opacity: 'toggle'}, 'slow');
      $('form.register-form').animate({height: 'toggle', opacity: 'toggle'}, 'slow');
  }

  register(event) {
    this.loading = true;
    const r = this.registerForm.value;
    // const res = this.accountService.register(r).subscribe(
    //   data => {
    //     this.loading = false;
    //     const response: any = data.json();
    //     if (response.succeeded) {
    //       this.toastr.success('Registration Successful', 'Success!');
    //     } else {
    //       response.errors.forEach(element => {
    //         this.toastr.error(element.description);
    //       });
    //     }
    //   },
    //   error => {
    //     this.loading = false;
    //     this.toastr.error('There was an error.', 'Oops!');
    //   }
    // );
  }

  login(event) {
    this.loading = true;
    const r = this.loginForm.value;
    const email = this.loginForm.get('email').value;
    // const res = this.accountService.login(r).subscribe(
    //   data => {
    //     this.loading = false;
    //     if (data.succeeded) {
    //       this.accountService.logged_in = true;
    //       this.accountService.setEmailString(email);
    //       this.router.navigate(['/invoice']);
    //     }else {
    //       this.toastr.error('Invalid Login.', 'Oops!');
    //     }
    //   },
    //   error => {
    //     this.loading = false;
    //     this.toastr.error('There was an error.', 'Oops!');
    //   }
    // );
  }


}
