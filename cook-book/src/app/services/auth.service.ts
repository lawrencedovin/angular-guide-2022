import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";
import { AuthResponseData } from "../models/auth.model";

@Injectable({providedIn: 'root'})
export class AuthService {
  API_KEY = 'AIzaSyDWlIRz4UwmMMnQW_A9VZJ8ri6CYKyad4o';

  constructor(private http: HttpClient) {}

  public signup(email, password) {
    const signupURL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.API_KEY}`;

    return this.http.post<AuthResponseData>(
      signupURL,
      {
        email,
        password,
        returnSecureToken: true
      }
    ).pipe(catchError(errorResponse => {
      let errorMessage = 'An uknown error for signup has occured!';
      if(!errorResponse.error || !errorResponse.error.error) {
        return throwError(errorMessage);
      }
      switch(errorResponse.error.error.message) {
        case 'EMAIL_EXISTS':
          errorMessage = 'This email exists already'
          break;
      }
      return throwError(errorMessage);
    }))
  }

  public login(email: string, password: string) {
    const loginURL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.API_KEY}`;

    return this.http.post<AuthResponseData>(
      loginURL,
      {
        email,
        password,
        returnSecureToken: true
      }
    ).pipe(catchError(errorResponse => {
      let errorMessage = 'An uknown error for login has occured!';
      if(!errorResponse.error || !errorResponse.error.error) {
        return throwError(errorMessage);
      }
      switch(errorResponse.error.error.message) {
        case 'EMAIL_NOT_FOUND':
          errorMessage = 'This email is not found'
          break;
        case 'INVALID_PASSWORD':
          errorMessage = 'Invalid password for email has been entered'
          break;
      }
      return throwError(errorMessage);
    }))
  }
}
