import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginUiServicesService {
  private showLogin: boolean = false;
  private subject = new Subject<any>();
  constructor() {}

  toggleShowLogin(): void {
    this.showLogin = true;
    this.subject.next(this.showLogin);
  }

  toggleCloseLogin(): void {
    this.showLogin = false;
    this.subject.next(this.showLogin);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
