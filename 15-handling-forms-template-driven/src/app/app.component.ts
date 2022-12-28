import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('userForm') userForm: NgForm
  defaultQuestion = 'pet';
  answer = '';

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // onSubmit(userForm: NgForm) {
  //   console.log('User form values: ', userForm.value);
  //   console.log('Valid: ', userForm.valid);
  // }

  onSubmit() {
    console.log('User form values: ', this.userForm.value);
    console.log('Valid: ', this.userForm.valid);
  }
}
