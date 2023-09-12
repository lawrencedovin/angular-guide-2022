import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Observable } from "rxjs";
import { AuthResponseData } from "../models/auth.model";
import { AuthService } from "../services/auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  error:string = null;

  constructor(private authService: AuthService){}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if(!form.valid) return;

    const {email, password} = form.value;
    let authObservable: Observable<AuthResponseData>;
    this.isLoading = true;

    if(this.isLoginMode) {
      authObservable = this.authService.login(email, password);
    } else {
      authObservable = this.authService.signup(email, password);
    }

    authObservable.subscribe(
      responseData => {
        console.log(responseData);
        this.error = null;
        this.isLoading = false;
      },
      errorResponse => {
        console.log(errorResponse);
        this.error = errorResponse;
        this.isLoading = false;
      }
    )

    form.reset();
  }
}
