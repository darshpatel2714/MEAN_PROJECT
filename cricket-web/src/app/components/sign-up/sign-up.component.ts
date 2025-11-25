import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ApiServiceService } from '../../services/api-service.service';
import Swal from 'sweetalert2';
import { catchError, of, throwError } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  myFrom: any;
  name = '';
  email = '';
  password = '';
  passwordFieldType: any='password';

  constructor(
    private fb: FormBuilder,
    public authService: ApiServiceService,
    public router: Router
  ) {
    this.myFrom = this.fb.group({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z]+ [a-zA-Z]+$'),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z0-9](.?[a-z0-9]){5,}@g(oogle)?mail.com$'),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z]).{8,}$'),
      ]),
    });
  }

  onSubmit(f: any) {
    console.log(f, 'submitted');
    if (this.myFrom.valid) {
      const { name, email, password } = this.myFrom.value;
      this.authService
        .usersSignUp({name,email,password})
        .pipe(
          catchError((error) => {
            // console.error('Error during signup:', error);
            if (
              error.status === 400 &&
              error.error.message === 'User already exists'
            ) {
              Swal.fire({
                icon: 'error',
                title: 'SignUp Failed',
                text: 'User already exists. Please try a different email.',
                showConfirmButton: true,
                confirmButtonText: 'OK',
              });
            }
            return throwError(error);
          })
        )
        .subscribe((res) => {
          console.log(res, 'User singed up sucessfully');
          Swal.fire({
            icon: 'success',
            title: 'SignUp Successfully..!',
            text: `Please check your Gmail : ${email}`,
            showConfirmButton: true,
            confirmButtonText: 'OK',
          });
          this.router.navigate(['login']);
        });
    }
  }

  togglePasswordView() {
    this.passwordFieldType =
      this.passwordFieldType === 'password' ? 'text' : 'password';
  }

}
