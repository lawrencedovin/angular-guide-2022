import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  logStatusUpdate(name: string, status: string) {
    alert(`${name} changed status to: ${status}`);
  }
}
