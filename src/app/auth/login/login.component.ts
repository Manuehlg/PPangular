import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'login',
  standalone: true,
  imports: [CommonModule,
  FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.email, this.password).subscribe({
      next: (user) => {
        console.log('Usuario logueado:', user);
        this.router.navigate(['/dashboard']); // o la ruta que corresponda
      },
      error: (error) => {
        this.errorMessage = error.message;
      }
    });
  }
}
