import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoginUiServicesService } from 'src/app/services/login-ui-service.service';
import { AuthService } from 'src/app/services/auth.service';
import { selectUser } from 'src/app/store/users/user.selector';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  user$: Observable<any> = this.store.select(selectUser);

  constructor(
    private loginUiService: LoginUiServicesService,
    private authService: AuthService,
    private store: Store,
    private router: Router
  ) {}

  ngOnInit(): void {}

  toggleShowLogin(): void {
    this.loginUiService.toggleShowLogin();
  }

  logOut(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
