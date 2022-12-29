import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('subscriptionForm') subscriptionForm: NgForm;
  subscriptionOptions = [
    {
      text: 'Basic',
      value: 'basic'
    },
    {
      text: 'Advanced',
      value: 'advanced'
    },
    {
      text: 'Pro',
      value: 'pro'
    }
  ]
  defaultSubscription = 'advanced'
  userSubscription = {
    email: '',
    subscription: '',
    password: ''
  }
  submitted = false;

  resetForm() {
    this.subscriptionForm.reset();
    this.subscriptionForm.form.patchValue(
    {
      subscriptions: 'advanced'
    });
  }

  onSubmit() {
    this.submitted = true;
    this.userSubscription.email = this.subscriptionForm.value.email;
    this.userSubscription.subscription = this.subscriptionForm.value.subscriptions;
    this.userSubscription.password = this.subscriptionForm.value.password;
    this.resetForm();
  }
}
