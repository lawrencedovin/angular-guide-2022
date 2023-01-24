import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AsyncValidatorFn } from '@angular/forms';
import { FormValidatorsService } from 'src/services/form-validators.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  signupForm: FormGroup;
  statusesOptions = [
    {
      'value': 'stable',
      'text': 'Stable'
    },
    {
      'value': 'critical',
      'text': 'Critical'
    },
    {
      'value': 'finished',
      'text': 'Finished'
    }
  ];

  constructor(private formValidatorsService: FormValidatorsService) {}

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'projectData': new FormGroup({
        //'projectName': new FormControl(null, [Validators.required, this.formValidatorsService.forbiddenName.bind(this)]),
        'projectName': new FormControl(null, Validators.required, this.formValidatorsService.asyncForbiddenName as AsyncValidatorFn),
        'email': new FormControl(null, [Validators.required, Validators.email])
      }),
      'statuses': new FormControl('critical')
    });
  }

  resetForm() {
    this.signupForm.reset();
    this.signupForm.patchValue({
      'statuses': 'critical'
    })
  }

  onSubmit() {
    console.log(this.signupForm);
    this.resetForm();
  }

}
