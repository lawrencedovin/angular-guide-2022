import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthResponseData } from "../models/auth.model";

@Injectable({providedIn: 'root'})
export class AuthService {
  API_KEY = 'AIzaSyDWlIRz4UwmMMnQW_A9VZJ8ri6CYKyad4o';

  constructor(private http: HttpClient) {}

  public signup(email, password) {
    const signupURL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.API_KEY}`
    return this.http.post<AuthResponseData>(
      signupURL,
      {
        email,
        password,
        returnSecureToken: true
      }
    )
  }
}
