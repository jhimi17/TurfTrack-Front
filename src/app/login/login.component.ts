import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService) {}

  onSubmit(): void {
    this.authService.login(this.email, this.password).subscribe(
      response => {
        console.log('Inicio de sesión exitoso', response);
      },
      error => {
        this.errorMessage = 'Credenciales inválidas. Inténtalo de nuevo.';
        console.error('Error de inicio de sesión', error);
      }
    );
  }
}
