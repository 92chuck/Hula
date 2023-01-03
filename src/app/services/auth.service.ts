import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { UserAction } from '../store/users/user.actions';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private store: Store) {}

  register(user: any): void {
    this.http
      .post('/api/users/register', user, httpOptions)
      .subscribe((user: any) => {
        localStorage.setItem('token', user.token);
        this.store.dispatch(UserAction.createUser({ user }));
      });
  }

  login(user: any): void {
    this.http
      .post('/api/users/login', user, httpOptions)
      .subscribe((user: any) => {
        localStorage.setItem('token', user.token);
        this.store.dispatch(UserAction.authenticateUser({ user }));
      });
  }

  logout(): void {
    localStorage.clear();
    const user = {};
    this.store.dispatch(UserAction.logOut({ user }));
  }
}
