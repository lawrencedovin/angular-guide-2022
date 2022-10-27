import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  logStatusChange(user: string, status: string) {
    console.log(`${user} changed status to ${status}`);
  }
}
