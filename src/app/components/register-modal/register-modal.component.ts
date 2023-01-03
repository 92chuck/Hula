import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterUiServiceService } from 'src/app/services/register-ui-service.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.css'],
})
export class RegisterModalComponent implements OnInit {
  showRegister: boolean = false;

  constructor(
    private registerUiService: RegisterUiServiceService,
    private router: Router,
    private authService: AuthService
  ) {
    this.registerUiService.onToggle().subscribe((value: boolean) => {
      this.showRegister = value;
    });
  }
  ngOnInit(): void {}

  registerForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      this.emailValidator,
    ]),
    username: new FormControl('', [
      Validators.required,
      this.usernameValidator,
    ]),
    password: new FormControl('', [
      Validators.required,
      this.passwordValidator,
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      this.confirmPasswordValidator.bind(this),
    ]),
  });

  toggleCloseRegiester(): void {
    this.registerUiService.toggleCloseRegiester();
  }

  register(): void {
    if (!this.registerForm.valid) {
      alert('all fields must be valid');
      return;
    }
    this.authService.register(this.registerForm.getRawValue());
    this.toggleCloseRegiester();
    this.router.navigate(['/']);
    this.registerForm.reset({
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
    });
    alert('Your Account is successfully registered!');
  }

  /**
   * custom validation
   */
  emailValidator(control: FormControl) {
    if (control.value.length === 0) {
      return null;
    } else if (control.value.length < 10 || control.value.length > 40) {
      return { emailValidator: true };
    } else {
      return null;
    }
  }

  usernameValidator(control: FormControl) {
    const specialChars = /[^a-zA-Z0-9 ]/g;
    if (control.value.length === 0) {
      return null;
    } else if (
      control.value.length < 4 ||
      control.value.length > 10 ||
      control.value.match(specialChars)
    ) {
      return { usernameValidator: true };
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

  confirmPasswordValidator(control: FormControl) {
    if (control.value.length === 0) {
      return null;
    } else if (control.value !== this.registerForm.getRawValue().password) {
      return { confirmPasswordValidator: true };
    } else {
      return null;
    }
  }
}
