import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormValidatorsService {

  constructor() { }

  forbiddenName(control: FormControl): {[key: string]: boolean} | null {
    if(control.value === 'Test') return {'projectNameIsForbidden': true};
    return null;
  }

  asyncForbiddenName(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if(control.value === 'Test') resolve({'projectNameIsForbidden': true});
        else resolve(null);
      }, 1500);
    });
    return promise;
  }
}
