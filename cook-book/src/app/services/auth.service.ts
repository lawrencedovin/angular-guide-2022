import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';
import { AuthResponseData } from '../models/auth.model';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  API_KEY = 'AIzaSyDWlIRz4UwmMMnQW_A9VZJ8ri6CYKyad4o';
  user = new Subject<User>();

  constructor(private http: HttpClient) {}

  public signup(email, password) {
    const signupURL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.API_KEY}`;

    return this.http
      .post<AuthResponseData>(signupURL, {
        email,
        password,
        returnSecureToken: true,
      })
      .pipe(
        catchError(this.handleError),
        tap((responseData) => {
          const { email, localId, idToken, expiresIn } = responseData;
          this.handleAuthentication(email, localId, idToken, +expiresIn);
        })
      );
  }

  public login(email: string, password: string) {
    const loginURL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.API_KEY}`;

    return this.http
      .post<AuthResponseData>(loginURL, {
        email,
        password,
        returnSecureToken: true,
      })
      .pipe(
        catchError(this.handleError),
        tap((responseData) => {
          const { email, localId, idToken, expiresIn } = responseData;
          this.handleAuthentication(email, localId, idToken, +expiresIn);
        })
      );
  }

  private handleAuthentication(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    // Gets expiration date in miliseconds and then converts those miliseconds into a Date Object.
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);
    this.user.next(user);
  }

  private handleError(errorResponse: HttpErrorResponse) {
    let errorMessage = 'An uknown error has occured!';
    if (!errorResponse.error || !errorResponse.error.error) {
      return throwError(errorMessage);
    }
    switch (errorResponse.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email exists already';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exist';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'Invalid password for email has been entered';
        break;
    }
    return throwError(errorMessage);
  }
}
