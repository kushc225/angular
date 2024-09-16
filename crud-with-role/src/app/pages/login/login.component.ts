import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20)
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&#])[A-Za-zd@$!%*?&#]{8,}$')


      ]]
    });
  }

  onLogin() {
    console.log('Username Control:', this.username?.value, this.username?.errors);
    console.log('Password Control:', this.password?.value, this.password?.errors);
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      if (username === 'admin' && password === 'Admin@123') {
        alert('Login successful!');
      } else {
        alert('Invalid credentials');
      }
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  getUsernameErrorMessage() {
    const control = this.username;
    if (control?.hasError('required')) {
      return 'Username is required';
    } else if (control?.hasError('minlength')) {
      return 'Username must be at least 4 characters long';
    } else if (control?.hasError('maxlength')) {
      return 'Username cannot be more than 20 characters long';
    }
    return '';
  }

  getPasswordErrorMessage() {
    const control = this.password;
    if (control?.hasError('required')) {
      return 'Password is required';
    } else if (control?.hasError('minlength')) {
      return 'Password must be at least 6 characters long';
    } else if (control?.hasError('pattern')) {
      return 'Password must contain at least one letter, one number, and one special character';
    }
    return '';
  }
}
