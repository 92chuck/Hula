import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterUiServiceService {
  private showRegister: boolean = false;
  private subject = new Subject<any>();
  constructor() {}

  toggleShowRegiester(): void {
    this.showRegister = true;
    this.subject.next(this.showRegister);
  }

  toggleCloseRegiester(): void {
    this.showRegister = false;
    this.subject.next(this.showRegister);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
