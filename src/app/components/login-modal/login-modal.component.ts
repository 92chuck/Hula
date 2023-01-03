import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginUiServicesService } from 'src/app/services/login-ui-service.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css'],
})
export class LoginModalComponent implements OnInit {
  showLogin: boolean = false;
  constructor(
    private loginUiService: LoginUiServicesService,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginUiService.onToggle().subscribe((value: boolean) => {
      this.showLogin = value;
    });
  }

  ngOnInit(): void {}

  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      this.emailValidator,
    ]),
    password: new FormControl('', [
      Validators.required,
      this.passwordValidator,
    ]),
  });

  toggleCloseLogin(): void {
    this.loginUiService.toggleCloseLogin();
  }

  login(): void {
    if (!this.loginForm.valid) {
      alert('all fields must be valid');
      return;
    }
    this.authService.login(this.loginForm.getRawValue());
    this.toggleCloseLogin();
    this.router.navigate(['/']);
    this.loginForm.reset({ email: '', password: '' });
    alert('You are successfully logged In!');
  }

  emailValidator(control: FormControl) {
    if (control.value.length === 0) {
      return null;
    } else if (control.value.length < 10 || control.value.length > 40) {
      return { emailValidator: true };
    } else {
      return null;
    }
  }

  passwordValidator(control: FormControl) {
    const isAllPresent = (str: any) => {
      const pattern = new RegExp(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$'
      );
      if (pattern.test(str)) return true;
      return false;
    };
    if (control.value.length === 0) {
      return null;
    } else if (
      control.value.length < 4 ||
      control.value.length > 12 ||
      !isAllPresent(control.value)
    ) {
      return { passwordValidator: true };
    } else {
      return null;
    }
  }
}
